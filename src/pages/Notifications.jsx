import React from "react";
import Header from "../components/Notifications/Header";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

function Notifications() {
  const notifications = [
    {
      id: 1,
      type: "assignment",
      title: "Assignment",
      description: "Sentiment Analysis on Social Media Data",
      time: "23m ago",
      icon: assets.submit,
    },
    {
      id: 2,
      type: "message",
      title: "Sage Emperor",
      description: "you can meet me after class today",
      time: "30m ago",
      icon: assets.message3,
    },
    {
      id: 3,
      type: "message",
      title: "Sage Emperor",
      description: "sent a photo",
      time: "1d ago",
      icon: assets.message3,
    },
    {
      id: 4,
      type: "message",
      title: "Sage Emperor",
      description: "I’ll send you a screenshot of my page",
      time: "1d ago",
      icon: assets.message3,
    },
    {
      id: 5,
      type: "message",
      title: "Sage Emperor",
      description: "You have pending assigments by the way",
      time: "2d ago",
      icon: assets.message3,
    },
    {
      id: 6,
      type: "assignment",
      title: "Assignment",
      description: "Handwritten Digit Recognition with MNIST Dataset",
      time: "4d ago",
      icon: assets.submit,
    },
    {
      id: 7,
      type: "assignment",
      title: "Assignment",
      description: "Handwritten Digit Recognition with Panda Dataset",
      time: "4d ago",
      icon: assets.submit,
    },
  ];

  return (
    <div>
      <Header />
      {/* Main container with proper spacing */}
      <div className="mt-8 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto lg:mx-0 space-y-4"> {/* Added space-y-4 here */}
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="flex font-lexend space-x-4 bg-white p-3 rounded-xl w-full"
            >
              <div className="mt-1">
                <img
                  src={notification.icon}
                  alt={notification.type}
                  className="w-8 h-8"
                />
              </div>
              <div className="flex justify-between flex-1">
                <div>
                  <h3 className="text-blueHover font-semibold">{notification.title}</h3>
                  <p className="text-sm pt-1 text-notif">
                    {notification.description}
                  </p>
                </div>
                <div className="space-y-4 ml-4 min-w-[70px]">
                  <p className="text-sm text-notif">{notification.time}</p>
                  <Link to="#">
                    <p className="text-sm text-blueHover">View</p>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Notifications;