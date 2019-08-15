class TracksController < ApplicationController    
    before_action :track, only: [:show,:update,:destroy]
    
    def index 
        tracks = Track.all 
        render json: tracks, status: 200
    end
    
    def show 
        if track
            render json: track, status:200 
        else 
            render json:{ errors: {id:["No track exist for that id "]} }, status:400
        end
    end
    
    def complete 
    end


    def create 
        track = Track.new(track_params)
        if track.save 
            render json: track, status:200
        else
            render json: { errors: track.errors },status:500
        end
    end

    def update 
        if track
            if track.update(track_params) 
                render json: track, status:200 
            else  
                render json: { errors: track.errors },status:500
            end
        else
            render json:{ errors: ["No track exist for that id "] }, status:400 
        end
    end

    def destroy 
        if track
            if track.destroy 
                render json: { success: true }, status:200 
            else  
                render json: { errors: ["Couldn't destroy track with id #{track.id}"]},status:500
            end
        else
            render json:{ errors: ["No track exist for that id "] }, status:400 
        end
    end

    def track
        track = Track.find_by(id:params[:id])
    end

    def track_params 
        params.permit(:title,:description)
    end

end