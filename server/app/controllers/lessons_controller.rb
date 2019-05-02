class LessonsController < ApplicationController
    def index 
        lessons = Lesson.all 
        render json: lessons, status: 200
    end

    def complete 
        @lesson=Lesson.find_by(id:params[:id])
        @user=User.find_by(id:params[:current_user_id]);
        if @lesson && @user
            user_lesson=UserLesson.find_or_create_by(lesson_id:@lesson.id,user_id:@user.id)
            user_lesson.completed=true
            if user_lesson.save 
                render json: {lesson:@lesson,user_lesson:user_lesson}, status: 200 
            end
        end
    end

    def show 
        lesson = Lesson.find_by(id:params[:id])
        if lesson
            user_lesson=UserLesson.find_or_create_by(lesson_id:lesson.id,user_id:params[:current_user_id])
            render json: {lesson:lesson,user_lesson:user_lesson}, status: 200
        else 
            render json: { errors: ["No Lesson found for that id"]}
        end
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
