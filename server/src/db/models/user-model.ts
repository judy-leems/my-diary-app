import { model } from 'mongoose';
import { UserSchema } from '../schemas/user-schema';
import { UserData, LoginInfo, UserUpdate } from '../../types/user.type';

const User = model<UserData>('users', UserSchema);

export class UserModel {
  // 회원가입
  async create(userInfo: LoginInfo): Promise<UserData> {
    return await User.create(userInfo);
  }

  // 이메일로 유저를 찾음 - 회원가입, 로그인, admin
  async findByEmail(email: string): Promise<UserData | null> {
    return await User.findOne({ email }).lean();
  }

  // userId로 유저 찾기 - 삭제, 사용자 정보 조회
  async findById(userId: string): Promise<UserData | null> {
    return await User.findOne({ _id: userId }).lean();
  }

  // 모든 사용자 찾음 - admin
  async findAll(): Promise<UserData[]> {
    return await User.find({});
  }

  // 사용자 정보 수정
  async update({ userId, update }: UserUpdate): Promise<UserData | null> {
    const filter = { _id: userId };
    const option = { new: true };

    const updateData = await User.findOneAndUpdate(
      filter,
      update,
      option
    ).lean();

    return updateData;
  }

  // 삭제
  async delete(userId: string): Promise<{ deletedCount?: number }> {
    return await User.deleteOne({ _id: userId });
  }
}

const userModel = new UserModel();

export { userModel };
