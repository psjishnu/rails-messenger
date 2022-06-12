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

  def create
    message = current_user.messages.build(message_params)
    if message.save
      render status: :created, json: {msg: "Message send"}
    end
  end

  private
  def message_params
    params.require(:message).permit(:body)
  end


end
