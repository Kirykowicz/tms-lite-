class LoadsController < ApplicationController

    def index
        render json: Load.all, status: :ok
    end

    def create 
        load = Load.create! load_params
        render json: load, status: :created 
    end

    def destroy 
        load = Load.find params[:id]
        load.destroy
        head :no_content 
    end

    private 

    def load_params
        params.permit :customer_id, :carrier_id, :revenue, :cost, :equipment_type
    end
end
