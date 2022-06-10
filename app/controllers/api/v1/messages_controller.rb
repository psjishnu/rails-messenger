class Api::V1::MessagesController < ApplicationController
  def index
    @messages = Message.all
    @result=[]
    @messages.each do |message|
      messageObject={username: message.user.username, id: message.id, body: message.body}
      @result << messageObject
    end
    render json: @result
  end
end
