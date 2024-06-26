import { Module } from "@nestjs/common";
import { ProductService } from "./product.service";
import { ProductsController } from "./products.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Product, ProductSchema } from "./schemas/product.schema";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
    ],
    controllers: [ProductsController],
    providers: [ProductService],
})
export class ProductsModule {}