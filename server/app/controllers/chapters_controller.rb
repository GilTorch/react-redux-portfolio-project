class ChaptersController < ApplicationController    
    # before_action :course, only: [:show,:update]
    
    def index 
        chapters = Chapter.all 
        render json: chapters, status:200
    end
    
    def show 
        if chapter 
            render json: chapter, status:200 
        else 
            render json:{ message:'Wrong Id'}, status:400
        end
    end
    
    def complete 
    end

    

    def destroy 
        if chapter
            if chapter.destroy 
                render json: { success: true }, status:200 
            else  
                render json: { errors: ["Couldn't destroy chapter with id #{chapter.id}"]},status:500
            end
        else
            render json:{ errors: ["No chapter exist for that id "] }, status:400 
        end
    end


    def create 
        chapter = Chapter.new(chapter_params)
        if chapter.save 
            render json: chapter, status:200
        else
            render json: { errors: chapter.errors },status:500
        end
    end

    def update 
        chapter = Chapter.new(chapter_params)
        if chapter.save 
            render json: chapter, status:200
        else
            render json: { errors: chapter.errors },status:500
        end
    end

    def chapter 
        chapter = Chapter.find_by(id:params[:id])
    end

    def chapter_params 
        params.permit(:title,:description,:track_id,:course_id)
    end

end