class AdminsController < ApplicationController
  before_action :authorize_request, only: [:verify]

  
  def login
    admin = Admin.find_by(username: admin_login_params[:username])

    if admin && admin.authenticate(admin_login_params[:password])
      token = create_token(admin.id)
      render json: {
        user: admin.attributes.except("password_digest"),
        token: token,
      }, status: :ok
    else
      render json: {error: "unauthorized"}, status: :unauthorized
    end
  end
  
  def verify
    render json: @current_admin.attributes.except("password_digest"), status: :ok
  end

  private

  def admin_login_params
    params.require(:admin).permit(:username, :password)
  end

  def create_token(user_id)
    payload = {id: admin_id, exp: 48.hours.from_now.to_i}
    JWT.encode(payload, SECRET_KEY)
  end

end
