import React, { useState } from "react";

const HeadteacherDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock data for demonstration
  const schoolStats = {
    totalStudents: 1250,
    totalTeachers: 45,
    totalClasses: 32,
    attendance: 94.5,
  };

  const recentActivities = [
    {
      id: 1,
      activity: "New teacher orientation completed",
      time: "2 hours ago",
    },
    { id: 2, activity: "Monthly budget report submitted", time: "1 day ago" },
    { id: 3, activity: "Parent-teacher meeting scheduled", time: "2 days ago" },
    {
      id: 4,
      activity: "School inspection report received",
      time: "3 days ago",
    },
  ];

  const upcomingEvents = [
    { id: 1, event: "Staff Meeting", date: "Tomorrow, 9:00 AM" },
    { id: 2, event: "Board Meeting", date: "Friday, 2:00 PM" },
    { id: 3, event: "School Assembly", date: "Monday, 8:00 AM" },
    { id: 4, event: "Parent Conference", date: "Next Week" },
  ];

  const feeRecords = [
    {
      id: 1,
      studentName: "John Doe",
      class: "Grade 10A",
      feeType: "Tuition Fee",
      amount: 15000,
      status: "Paid",
      dueDate: "2024-01-15",
      paidDate: "2024-01-10",
    },
    {
      id: 2,
      studentName: "Jane Smith",
      class: "Grade 9B",
      feeType: "Activity Fee",
      amount: 5000,
      status: "Pending",
      dueDate: "2024-01-20",
      paidDate: null,
    },
    {
      id: 3,
      studentName: "Mike Johnson",
      class: "Grade 11C",
      feeType: "Lab Fee",
      amount: 8000,
      status: "Overdue",
      dueDate: "2024-01-05",
      paidDate: null,
    },
    {
      id: 4,
      studentName: "Sarah Wilson",
      class: "Grade 8A",
      feeType: "Transport Fee",
      amount: 12000,
      status: "Paid",
      dueDate: "2024-01-18",
      paidDate: "2024-01-16",
    },
    {
      id: 5,
      studentName: "David Brown",
      class: "Grade 12B",
      feeType: "Exam Fee",
      amount: 3000,
      status: "Pending",
      dueDate: "2024-01-25",
      paidDate: null,
    },
  ];

  const feeStats = {
    totalCollected: 2450000,
    totalPending: 180000,
    totalOverdue: 95000,
    collectionRate: 93.2,
  };

  return (
    <div className="min-h-full bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Top Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-6 py-4">
          {/* Mobile: Notification at top right */}
          <div className="flex justify-end sm:hidden mb-4">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 17h5l-5 5-5-5h5v-12h5v12z"
                    />
                  </svg>
                </button>
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </div>
            </div>
          </div>

          {/* Mobile: Full width title card */}
          <div className="sm:hidden">
            <div className="bg-gradient-to-r from-primary-green to-secondary-navy rounded-lg p-4 text-white text-center mb-4">
              <div className="flex items-center justify-center space-x-3 mb-2">
                <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <span className="text-lg">👨‍💼</span>
                </div>
                <div>
                  <p className="font-semibold">Dr. John Smith</p>
                  <p className="text-xs opacity-90">Headteacher</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900">
                Headteacher Dashboard
              </h1>
              <p className="text-gray-600 text-sm mt-1">
                Welcome back! Here's what's happening at Ebenezer School today.
              </p>
            </div>
          </div>

          {/* Desktop: Original layout */}
          <div className="hidden sm:flex sm:items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Headteacher Dashboard
              </h1>
              <p className="text-gray-600 text-sm mt-1">
                Welcome back! Here's what's happening at Ebenezer School today.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 17h5l-5 5-5-5h5v-12h5v12z"
                    />
                  </svg>
                </button>
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </div>
              <div className="flex items-center space-x-3 bg-gradient-to-r from-primary-green to-secondary-navy rounded-lg p-3 text-white">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <span className="text-sm">👨‍💼</span>
                </div>
                <div>
                  <p className="font-semibold text-sm">Dr. John Smith</p>
                  <p className="text-xs opacity-90">Headteacher</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content Area */}
      <div className="p-6">
        {/* Dashboard Content */}
        <div className="max-w-7xl mx-auto">
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">
                      Total Students
                    </p>
                    <p className="text-3xl font-bold text-gray-900">
                      {schoolStats.totalStudents.toLocaleString()}
                    </p>
                    <p className="text-xs text-green-600 mt-1">
                      ↗ +5.2% from last month
                    </p>
                  </div>
                  <div className="p-3 bg-gradient-to-br from-primary-green to-green-600 rounded-xl">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">
                      Total Teachers
                    </p>
                    <p className="text-3xl font-bold text-gray-900">
                      {schoolStats.totalTeachers}
                    </p>
                    <p className="text-xs text-green-600 mt-1">
                      ↗ +2 new hires
                    </p>
                  </div>
                  <div className="p-3 bg-gradient-to-br from-secondary-navy to-gray-800 rounded-xl">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">
                      Total Classes
                    </p>
                    <p className="text-3xl font-bold text-gray-900">
                      {schoolStats.totalClasses}
                    </p>
                    <p className="text-xs text-blue-600 mt-1">
                      → Same as last term
                    </p>
                  </div>
                  <div className="p-3 bg-gradient-to-br from-primary-green to-green-700 rounded-xl">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">
                      Attendance Rate
                    </p>
                    <p className="text-3xl font-bold text-gray-900">
                      {schoolStats.attendance}%
                    </p>
                    <p className="text-xs text-green-600 mt-1">
                      ↗ +1.2% this week
                    </p>
                  </div>
                  <div className="p-3 bg-gradient-to-br from-secondary-navy to-blue-900 rounded-xl">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 00-2-2z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Quick Actions
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  {
                    name: "Add Student",
                    icon: "👤",
                    color: "from-primary-green to-green-600",
                  },
                  {
                    name: "Schedule Meeting",
                    icon: "📅",
                    color: "from-secondary-navy to-gray-800",
                  },
                  {
                    name: "Generate Report",
                    icon: "📊",
                    color: "from-primary-green to-green-700",
                  },
                  {
                    name: "Send Notice",
                    icon: "📢",
                    color: "from-secondary-navy to-blue-900",
                  },
                ].map((action, index) => (
                  <button
                    key={index}
                    className={`p-4 bg-gradient-to-r ${action.color} text-white rounded-lg hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1`}
                  >
                    <div className="text-2xl mb-2">{action.icon}</div>
                    <div className="text-sm font-medium">{action.name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Main Dashboard Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Recent Activities */}
              <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Recent Activities
                  </h3>
                  <button className="text-primary-green hover:text-green-700 text-sm font-medium">
                    View All
                  </button>
                </div>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div
                      key={activity.id}
                      className="flex items-start space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                    >
                      <div
                        className={`w-3 h-3 rounded-full mt-2 ${
                          index === 0
                            ? "bg-green-500"
                            : index === 1
                            ? "bg-blue-500"
                            : index === 2
                            ? "bg-purple-500"
                            : "bg-gray-400"
                        }`}
                      ></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">
                          {activity.activity}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming Events */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Upcoming Events
                  </h3>
                  <button className="text-primary-green hover:text-green-700 text-sm font-medium">
                    Add Event
                  </button>
                </div>
                <div className="space-y-3">
                  {upcomingEvents.map((event, index) => (
                    <div
                      key={event.id}
                      className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg hover:from-blue-50 hover:to-indigo-50 transition-all duration-200 cursor-pointer"
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-2 h-8 rounded-full ${
                            index === 0
                              ? "bg-red-500"
                              : index === 1
                              ? "bg-blue-500"
                              : index === 2
                              ? "bg-green-500"
                              : "bg-purple-500"
                          }`}
                        ></div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {event.event}
                          </p>
                          <p className="text-xs text-gray-600">{event.date}</p>
                        </div>
                      </div>
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Monthly Performance
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                      Student Satisfaction
                    </span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-primary-green h-2 rounded-full"
                          style={{ width: "92%" }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-900">
                        92%
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                      Teacher Performance
                    </span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-secondary-navy h-2 rounded-full"
                          style={{ width: "88%" }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-900">
                        88%
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                      Academic Excellence
                    </span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-primary-green h-2 rounded-full"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-900">
                        85%
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  School Announcements
                </h3>
                <div className="space-y-3">
                  <div className="p-3 bg-green-50 rounded-lg border-l-4 border-primary-green">
                    <p className="text-sm font-medium text-green-900">
                      New Semester Registration
                    </p>
                    <p className="text-xs text-green-700 mt-1">
                      Registration opens next Monday
                    </p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-secondary-navy">
                    <p className="text-sm font-medium text-blue-900">
                      Sports Day Event
                    </p>
                    <p className="text-xs text-blue-700 mt-1">
                      Scheduled for next Friday
                    </p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg border-l-4 border-primary-green">
                    <p className="text-sm font-medium text-green-900">
                      Parent Meeting
                    </p>
                    <p className="text-xs text-green-700 mt-1">
                      Monthly meeting this Saturday
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Fee Records Section */}
            <div className="space-y-6">
              {/* Fee Statistics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 mb-1">
                        Total Collected
                      </p>
                      <p className="text-3xl font-bold text-gray-900">
                        KES {feeStats.totalCollected.toLocaleString()}
                      </p>
                      <p className="text-xs text-green-600 mt-1">
                        ↗ +8.5% this month
                      </p>
                    </div>
                    <div className="p-3 bg-gradient-to-br from-primary-green to-green-600 rounded-xl">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 mb-1">
                        Pending Fees
                      </p>
                      <p className="text-3xl font-bold text-gray-900">
                        KES {feeStats.totalPending.toLocaleString()}
                      </p>
                      <p className="text-xs text-yellow-600 mt-1">
                        → 15 students pending
                      </p>
                    </div>
                    <div className="p-3 bg-gradient-to-br from-secondary-navy to-gray-700 rounded-xl">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 mb-1">
                        Overdue Fees
                      </p>
                      <p className="text-3xl font-bold text-gray-900">
                        KES {feeStats.totalOverdue.toLocaleString()}
                      </p>
                      <p className="text-xs text-red-600 mt-1">
                        ↓ 8 students overdue
                      </p>
                    </div>
                    <div className="p-3 bg-gradient-to-br from-red-600 to-red-700 rounded-xl">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 mb-1">
                        Collection Rate
                      </p>
                      <p className="text-3xl font-bold text-gray-900">
                        {feeStats.collectionRate}%
                      </p>
                      <p className="text-xs text-blue-600 mt-1">
                        ↗ +2.1% improvement
                      </p>
                    </div>
                    <div className="p-3 bg-gradient-to-br from-primary-green to-green-700 rounded-xl">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 00-2-2z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fee Records Table */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-gray-900">
                      Recent Fee Records
                    </h3>
                    <div className="flex items-center space-x-3">
                      <button className="px-4 py-2 bg-primary-green text-white rounded-lg hover:bg-green-700 transition-colors duration-200 text-sm font-medium">
                        Export Records
                      </button>
                      <button className="px-4 py-2 bg-secondary-navy text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 text-sm font-medium">
                        Add Payment
                      </button>
                    </div>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Student
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Class
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Fee Type
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Amount
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Due Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {feeRecords.map((record) => (
                        <tr
                          key={record.id}
                          className="hover:bg-gray-50 transition-colors duration-200"
                        >
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">
                              {record.studentName}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-600">
                              {record.class}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-600">
                              {record.feeType}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">
                              KES {record.amount.toLocaleString()}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-600">
                              {record.dueDate}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span
                              className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                record.status === "Paid"
                                  ? "bg-green-100 text-green-800"
                                  : record.status === "Pending"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-red-100 text-red-800"
                              }`}
                            >
                              {record.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex items-center space-x-2">
                              <button className="text-primary-green hover:text-green-800 transition-colors duration-200">
                                View
                              </button>
                              {record.status !== "Paid" && (
                                <button className="text-primary-green hover:text-green-800 transition-colors duration-200">
                                  Mark Paid
                                </button>
                              )}
                              <button className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                                Edit
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                      Showing 5 of 150 fee records
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="px-3 py-1 text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">
                        Previous
                      </button>
                      <button className="px-3 py-1 bg-primary-green text-white text-sm rounded hover:bg-green-700 transition-colors duration-200">
                        1
                      </button>
                      <button className="px-3 py-1 text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">
                        2
                      </button>
                      <button className="px-3 py-1 text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">
                        3
                      </button>
                      <button className="px-3 py-1 text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadteacherDashboard;
