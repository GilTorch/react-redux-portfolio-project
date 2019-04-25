class UsersController < ApplicationController
    skip_before_action :verify_authenticity_token 

    def index 
        users = User.all 
        render json: users, status: 200
    end

    def show 
        user = User.find_by(id:params[:id])
        render json: user, status: 200
    end

    def create 
        user = User.new(username:params[:username],email:params[:email],password:params[:password],password_confirmation:params[:passwordConfirmation])

        if user.save 
            render json: user, status: 200
        else 
            render json: {errors: user.errors}
        end
    end

    def update 
        user = User.new(username:params[:username],email:params[:email],password:params[:password],password_confirmation:params[:passwordConfirmation])
        if user.update
            render json: user, status: 200
        else 
            render json: user.errors, status: 500
        end
    end

    def user_params 
        params.require(:user).permit(:username,:email,:password,:password_confirmation)
    end
end
