module.exports=(RoadOwners,DataTypes)=>{

    const Product = RoadOwners.define(
      'Product',
      {
        // Model attributes are defined here
        name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          imageUrl: {
            type: DataTypes.TEXT,
            allowNull: false,
          },
          price: {
            type: DataTypes.INTEGER,
            allowNull: false,
          }   
    }
    );
    return Product
    }