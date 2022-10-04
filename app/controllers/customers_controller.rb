class CustomersController < ApplicationController

    def index
        render json: Customer.all, status: :ok 
    end

    def create  
        customer = Customer.create!(customer_params)
        render json: customer, status: :created 
    end

    def destroy 
        customer = Customer.find(params[:id])
        customer.destroy
        head :no_content
    end

    private 

    def customer_params
        params.permit :name, :address
    end
end
