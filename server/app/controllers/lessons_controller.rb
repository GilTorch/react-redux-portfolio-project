class LessonsController < ApplicationController

    before_action :lesson,only:[:show,:update,:delete]

    def index 
        lessons = Lesson.all 
        render json: lessons, status: 200
    end

    def complete 
    end


    def destroy 
        if lesson
            if lesson.destroy 
                render json: { success: true }, status:200 
            else  
                render json: { errors: ["Couldn't destroy lesson with id #{lesson.id}"]},status:500
            end
        else
            render json:{ errors: ["No lesson exist for that id "] }, status:400 
        end
    end

    def show 
        if lesson
            render json: lesson, status: 200
        else 
            render json: { errors: ["No Lesson found for that id"]}
        end
    end

    def create 
        lesson = Lesson.new(lesson_params)

        if lesson.save 
            render json: lesson, status: 200
        else 
            render json: {errors:lesson.errors}, status: 500
        end
    end

    def update 
        if lesson
            if lesson.update(lesson_params) 
                render json: lesson, status:200 
            else  
                render json: { errors: lesson.errors },status:500
            end
        else
            render json:{ errors: ["No lesson exist for that id "] }, status:400 
        end
    end

    def lesson 
        lesson=Lesson.find_by(id:params[:id])
    end

    def lesson_params 
        params.permit(:title,:content,:track_id,:course_id,:chapter_id)
    end
end
