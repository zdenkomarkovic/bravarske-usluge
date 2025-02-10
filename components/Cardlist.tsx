"use client";

import React from "react";
import { serviceList } from "@/constants/index";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";

const Cardlist = () => {
  return (
    <div className="py-20">
      <div className="container px-4 mx-auto flex flex-col gap-6">
        {serviceList.map((item, index) => {
          return (
            <motion.div
              key={index}
              initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }} // Naizmenično levo/desno
              whileInView={{ x: 0, opacity: 1 }} // Animira se ka centru
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className={`flex ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              } w-full`}
            >
              <Card className="  w-3/4 shadow-lg md:p-5">
                <CardHeader>
                  <CardTitle className=" flex gap-5 text-5xl items-center mx-auto text-primary">
                    <span className="text-8xl">{<item.icon />}</span>
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-4xl">{item.text}</p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Cardlist;
