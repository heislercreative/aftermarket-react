class UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
    render json: @user
  end

  def create
    @user = User.new_with_cart(signup_params)
    if @user.save
      render json: @user, status: 201
    end
  end

  def update
    @user = User.find(params[:id])
    if @user.token == update_params[:token]
      @user.update(update_params)
      if @user.save
        render json: @user, status: 201
      end
    end
  end

  private

  def signup_params
    params.permit(:email, :password, :first_name, :last_name, :address, :city, :state_initials, :zip)
  end

  def update_params
    params.permit(:id, :token, :email, :password, :first_name, :last_name, :address, :city, :state_initials, :zip)
  end

end
