import { model } from 'mongoose';
import { UserSchema } from '../schemas/user-schema';
import { UserData, LoginInfo } from '../../types/user.type';

const User = model<UserData>('users', UserSchema);

export class UserModel {
  //이메일로 유저를 찾음
  async findByEmail(email: string): Promise<UserData | null> {
    return await User.findOne({ email }).lean();
  }
  //userId(ObjectId)로 유저를 찾음)
  async findById(userId: string): Promise<UserData | null> {
    return await User.findOne({ _id: userId }).lean();
  }
  //userInfo Object를 받아 생성
  async create(userInfo: LoginInfo): Promise<UserData> {
    return await User.create(userInfo);
  }
}

const userModel = new UserModel();

export { userModel };
