import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserModel, userModel } from '../db';
import { UserData, LoginInfo } from '../types/user.type';

class UserService {
  constructor(private userModel: UserModel) {
    this.userModel = userModel;
  }

  // 로그인
  async getUserToken(loginInfo: LoginInfo): Promise<any> {
    // 객체 destructuring
    const { email, password } = loginInfo;

    // 우선 해당 이메일의 사용자 정보가  db에 존재하는지 확인
    const user = await this.userModel.findByEmail(email);
    if (!user) {
      throw new Error('auth/wrong-email');
    }

    console.log(user);

    // 이제 이메일은 문제 없는 경우이므로, 비밀번호를 확인함

    // 비밀번호 일치 여부 확인
    const correctPasswordHash = user.password; // db에 저장되어 있는 암호화된 비밀번호

    // 매개변수의 순서 중요 (1번째는 프론트가 보내온 비밀번호, 2번쨰는 db에 있떤 암호화된 비밀번호)
    const isPasswordCorrect = await bcrypt.compare(
      password,
      correctPasswordHash
    );

    if (!isPasswordCorrect) {
      throw new Error('auth/wrong-password');
    }

    // 로그인 성공 -> JWT 웹 토큰 생성
    const secretKey = process.env.JWT_SECRET_KEY || 'secret-key';

    // 2개 프로퍼티를 jwt 토큰에 담음
    //return jwt.sign({ userId: user._id, role: user.role }, secretKey);
  }

  async addUser(userInfo: LoginInfo): Promise<UserData> {
    // 객체 destructuring
    const { email, password } = userInfo;

    // 이메일 중복 확인
    const user = await this.userModel.findByEmail(email);
    if (user) {
      throw new Error('auth/email-already-use');
    }
    // 우선 비밀번호 해쉬화(암호화)
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUserInfo = {
      email,
      password: hashedPassword,
    };

    // db에 저장
    return await this.userModel.create(newUserInfo);
  }
}

const userService = new UserService(userModel);

export { userService };
