class LessonsController < ApplicationController
    def index 
        lessons = Lesson.all 
        render json: lessons, status: 200
    end

    def show 
        lesson = Lesson.find_by(id:params[:id])
        render json: lesson, status: 200
    end

    def create 
        lesson = Lesson.create(title:params[:title],content:params[:content])

        if lesson.save 
            render json: lesson, status: 200
        else 
            render json: lesson.errors, status: 500
        end
    end

    def update 
        lesson = Lesson.find_by(id:params[:id])

        if lesson.update(title:params[:title],content:params[:content])
            render json: lesson, status: 200
        else 
            render json: lesson.errors, status: 500
        end
    end

    def lesson_params 
        params.require(:lesson).permit(:title,:content)
    end
end
