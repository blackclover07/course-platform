export interface LoginRequest{
  email: string;
  password: string;
}

export interface LoginResponse{
  access: string;
  refresh: string;
}

export interface StudentProfile{
  email: string;
  first_name: string;
  last_name: string;
  role: string;
  profile_image: File;
  is_email_verified: boolean;
}
