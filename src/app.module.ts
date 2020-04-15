import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot('mongodb+srv://victor:1234@cluster-nwcwp.mongodb.net/test?retryWrites=true&w=majority')
  ]
})
export class AppModule {}
