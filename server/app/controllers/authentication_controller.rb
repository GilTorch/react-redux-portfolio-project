class AuthenticationController < ApplicationController 

skip_before_action :authenticate_request

 def login
   command = AuthenticateUser.call(params[:email], params[:password])

   authenticate
 end

  def create 
    user = User.new(username:params[:username],email:params[:email],password:params[:password],password_confirmation:params[:passwordConfirmation])

    if user.save 
      authenticate
    else 
      render json:{ error: ["Something unexpected happen."]}
    end
  end

  private 

  def authenticate 
    command = AuthenticateUser.call(params[:email], params[:password])
  
    if command.success?
      render json: { auth_token: command.result }
    else
      render json: { error: command.errors }, status: :unauthorized
    end 
  end

end