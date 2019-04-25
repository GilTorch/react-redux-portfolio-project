class SessionsController < ApplicationController 

    skip_before_action :verify_authenticity_token  


    def create
        user=User.find_by(email:params[:email])

        if user && user.authenticate(params[:password])
            render json: user,status: 200
        else 
           render json: {errors:{user:["doesn't exist in the database"]}} , status: 200
        end
    end 


    def new 
        if is_logged_in?
            redirect_to user_path(current_user.id)
        end
    end
    
end