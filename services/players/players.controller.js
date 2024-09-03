const Service = require("./players.services");
const { commonResponse } = require("../../helper");
const RoomService = require('../rooms/rooms.services');


module.exports  = {


    /* 
     * Create Players  
    */

    // create:async(req,res,next) => {
    //     try {
            
    //         let data = await Service.create(req.body);
    //         let room = await RoomService.is_exist();
    //         if(data){
    //            return commonResponse.success(res, "PLAYERS_CREATE", 200, data, 'Success' );
    //         }else{
    //            return commonResponse.customResponse(res, "SERVER_ERROR", 400, {} , 'Something went wrong, Please try again' )
    //         }
    //     } catch (error) {
    //         console.log("Create PLAYER -> " , error);
    //         return error;
    //     }
    // },


    create:async(req,res,next) => {
        try {
            let player = await Service.create(req.body);
            if(player){
                let room = await RoomService.is_exist(player.game_id);
                if(room && room.players.length < 10) {
                    await RoomService.pushPlayer(player._id , room._id);
                }else{
                    console.log("hellooooooooo");
                    let roomData = { game_id: player.game_id, players: [player._id] };
                    console.log("Room data ----->>>>>" , roomData);
                    await RoomService.create(roomData);
                }
                return commonResponse.success(res, "PLAYER_CREATE", 200, player, 'Success' );
            }else{
                return commonResponse.customResponse(res, "DEFAULT_ERROR", 400, {}, 'Something went wrong' );
            }
        } catch (error) {
            console.log("CREATE PLAYER -> " , error);
            return error;
        }
    },

    /* 
     * List Players  
    */

    list:async(req,res,next) => {
        try {
            let query = {};
            let data = await Service.list(query);
            if(data){
               return commonResponse.success(res, "PLAYERS_LIST", 200, data, 'Success' );
            }else{
               return commonResponse.customResponse(res, "SERVER_ERROR", 400, {} , 'Something went wrong, Please try again' )
            }
        } catch (error) {
            console.log("LIST PLAYER -> " , error);
            return error;
        }
    },

    /* 
     * Get Players By Id  
    */

    GetById :async(req,res,next) => {
        try {
            let data = await Service.get(req.params.id);
            if(data){
               return commonResponse.success(res, "PLAYERS_GET", 200, data, 'Success' );
            }else{
               return commonResponse.customResponse(res, "SERVER_ERROR", 400, {} , 'Something went wrong, Please try again' )
            }
        } catch (error) {
            console.log("GET PLAYER -> " , error);
            return error;
        }
    },

    /* 
     * Update Players By Id  
    */

    update:async(req,res,next) => {
        try {
            let data = await Service.update(req.params.id, req.body);
            if(data){
               return commonResponse.success(res, "PLAYER_UPDATED", 200, data, 'Success' );
            }else{
               return commonResponse.customResponse(res, "SERVER_ERROR", 400, {} , 'Something went wrong, Please try again' )
            }
        } catch (error) {
            console.log("Update Player -> " , error);
            return error; 
        }
    },

    /* 
     * Delete Players By Id  
    */

    delete:async(req,res,next) => {
        try {
            let data = await Service.delete(req.params.id);
            if(data){
               return commonResponse.success(res, "PLAYER_DELETE", 200, data, 'Success' );
            }else{
               return commonResponse.customResponse(res, "SERVER_ERROR", 400, {} , 'Something went wrong, Please try again' )
            }
        } catch (error) {
            console.log("Delete Player -> " , error);
            return error; 
        }
    },

}