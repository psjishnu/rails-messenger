class Api::V1::UsersController < ApplicationController
  def index
    @users = User.all.select(:username, :id)
    render json: @users
  end
end
