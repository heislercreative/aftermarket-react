class SessionsController < ApplicationController

  def create
    if @user = User.find_by(email: params[:email])
      if @user.authenticate(params[:password])
          session[:user_token] = @user.token
          render json: @user, status: 201
      end
    end
  end

  def destroy
    reset_session
  end

end
