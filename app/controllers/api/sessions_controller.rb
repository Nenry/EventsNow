class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])

    if @user
      login(@user)
      render :show
    else 
      render json: ["Invalid email and password"], status: 422
    end 
  end 

  def destroy
    @user = current_user
    if @user 
      logout
      render json: {}
    else
      render json: ["Nobody is logged in to log out"], status: 404
    end 
  end 


end
