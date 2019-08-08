class CoursesController < ApplicationController    
    skip_before_action :verify_authenticity_token  
    before_action :course, only: [:show,:update]
    
    def index 
        courses = Course.all 
        render json: courses, status:200
    end
    
    def show 
        if @course 
            render json: @course, status:200 
        else 
            render json:{ message:'Wrong Id'}, status:400
        end
    end
    
    def complete 
    end


    def create 
        course = Course.create(course_params)
        if course 
            render json: course, status:200
        else
            render json: { message:'Something unexpected happen' },status:500
        end
    end

    def update 
    end

    def course 
        @course = Course.find_by(id:params[:id])
    end

    def course_params 
        params.permit(:title,:description)
    end

end