class Api::V1::UsersController < ApplicationController
  def index
    render json: {name: "Jishnu",id: 1}
  end
end
