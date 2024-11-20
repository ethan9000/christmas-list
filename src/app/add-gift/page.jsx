"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { api } from "../../../convex/_generated/api";
import { useMutation, useQuery } from "convex/react";

const AddGift = () => {
  const [formData, setFormData] = useState({
    url: "",
    name: "",
    category: "",
    purchasable: false,
  });

  const [categoryData, setCategoryData] = useState({
    name: "",
  });

  const categories = useQuery(api.categories.getCategories);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePurchasableChange = (e) => {
    setFormData({
      ...formData,
      purchasable: !formData.purchasable,
    });
  };

  const handleCatChange = (value) => {
    setFormData({ ...formData, category: value });
    console.log(formData);
  };

  const handleCategoryChange = (e) => {
    setCategoryData({ ...categoryData, [e.target.name]: e.target.value });
  };

  const addGift = useMutation(api.gifts.addGift);
  const addCategory = useMutation(api.categories.addCategory);
  const handleSubmit = (e) => {
    e.preventDefault();
    addGift(formData);
    setFormData("");
  };

  const handleAddCategory = (e) => {
    e.preventDefault();
    addCategory(categoryData);
    setCategoryData("");
  };

  return (
    <div>
      <h1>Add Gift Idea</h1>
      <div className="flex flex-col lg:flex-row justify-center items-center min-h-screen gap-10">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Create Gift</CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="url">URL</Label>
                  <Input
                    name="url"
                    id="url"
                    placeholder="URL of the product"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    name="name"
                    id="name"
                    placeholder="Name of your project"
                    onChange={handleChange}
                  />
                </div>

                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="category">Category</Label>
                  <Select onValueChange={handleCatChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories?.map((category) => (
                        <SelectItem key={category._id} value={category.name}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="purchasable">Purchasable</Label>
                  <Switch
                    id="purchasable"
                    checked={formData.purchasable}
                    onCheckedChange={handlePurchasableChange}
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button onClick={handleSubmit}>Add Gift</Button>
          </CardFooter>
        </Card>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Create Category</CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    name="name"
                    id="name"
                    placeholder="Name of your project"
                    onChange={handleCategoryChange}
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button onClick={handleAddCategory}>Add Category</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default AddGift;
