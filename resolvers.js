const Student = require('./Student');
// Resolvers
const resolvers = {
    Query:{
        hello:()=>{
            return "Hello Ripon";
        },
        students:async()=>{
            return await Student.find();
        },
    },
    Mutation:{ 
        createStudent: async (parent, args, context, info)=>{
            const{name, email, phone, dOB, subjects, description} =args.student
            const student = await new Student({name,
            email, phone, dOB, subjects, description}).save()
            return student;
        },
        updateStudent: async (parent, args, context, info)=>{
            const {id} = args.student
            const{name, email, phone, dOB, subjects, description} =args.student
            const student = await Student.findOneAndUpdate(
                id, 
                {name, email, phone, dOB, subjects, description},
                {new: true})
            return student;
        },
        deleteStudent:async(parent, args, context, info)=>{
            const {id} = args
            await Student.findOneAndDelete(id);
            return "student deleted";
        },
    },
   
};

module.exports = resolvers;