class TracksController < ApplicationController    
    before_action :track, only: [:show,:update]
    
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
        track = Track.new(tracks_params)
        if track.save 
            render json: track, status:200
        else
            render json: { errors: track.errors },status:500
        end
    end

    def update 
    end

    def track
        track = Track.find_by(id:params[:id])
    end

    def tracks_params 
        params.permit(:title,:description)
    end

end