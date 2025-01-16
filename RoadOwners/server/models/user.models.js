module.exports=(RoadOwners,DataTypes)=>{

    const User = RoadOwners.define(
      'User',
      {
        // Model attributes are defined here
        email: {
          type: DataTypes.TEXT,
          allowNull: false,
          unique: true
        },
        password:{
          type: DataTypes.STRING,
          allowNull: false, 
        }

    }
    );
    return User
    }