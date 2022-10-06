class StopsController < ApplicationController

    def index
        render json: Stop.all, status: :ok 
    end

    def create
        stop = Stop.create! stop_params
        render json: stop, status: :created 
    end

    def update 
        stop = Stop.find(params[:id])
        stop.update load_params
        render json: stop 
    end

    private 

    def stop_params
        params.permit :load_id, :site_id 
    end
end
