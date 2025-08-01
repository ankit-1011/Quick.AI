import {clerkClient} from "@clerk/express"



//middleware to check userId & hasPremiumPlan

export const auth = async(req,res,next)=>{
    try{
          const {userId,has} = await req.auth()
          const hasPremiumPlan = await has({plan:'premium'})
          
          const user = await clerkClient.users.getUser(userId);

          if(!hasPremiumPlan && user.privateMetadata.free.usage){
            req.free_usage = user.privateMetadata.free.usage
          }else{
            await clerkClient.users.updateUserMetadata(userId,{
               privateMetadata:{
                 free_usage:0
               }
            })
            req.free_usage =0;
          }
          req.plan = hasPremiumPlan ? 'premium' : 'free'
          next()
    }catch(error){
        res.json({success: false,message: error.message})
    }
}