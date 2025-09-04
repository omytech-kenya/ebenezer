import React, { useState } from "react";

const SecretaryDashboard = () => {
  const [activeSection, setActiveSection] = useState("overview");

  // Mock data for demonstration
  const todayStats = {
    visitorsToday: 12,
    callsAnswered: 28,
    documentsProcessed: 15,
    appointmentsScheduled: 8,
    feesCollectedToday: 450000,
    pendingPayments: 23,
  };

  // Fee management data
  const feeStats = {
    totalCollected: 2450000,
    totalPending: 180000,
    totalOverdue: 95000,
    collectionRate: 93.2,
    paymentsToday: 8,
  };

  const recentPayments = [
    {
      id: 1,
      studentName: "John Doe",
      class: "Grade 10A",
      amount: 15000,
      paymentMethod: "Cash",
      time: "9:30 AM",
      receiptNo: "RCP001234",
    },
    {
      id: 2,
      studentName: "Jane Smith",
      class: "Grade 9B",
      amount: 25000,
      paymentMethod: "Bank Transfer",
      time: "10:45 AM",
      receiptNo: "RCP001235",
    },
    {
      id: 3,
      studentName: "Mike Johnson",
      class: "Grade 11C",
      amount: 8000,
      paymentMethod: "Mobile Money",
      time: "11:20 AM",
      receiptNo: "RCP001236",
    },
  ];

  const pendingFees = [
    {
      id: 1,
      studentName: "Sarah Wilson",
      class: "Grade 8A",
      feeType: "Tuition Fee",
      amount: 12000,
      dueDate: "2024-01-20",
      daysOverdue: 0,
    },
    {
      id: 2,
      studentName: "David Brown",
      class: "Grade 12B",
      feeType: "Lab Fee",
      amount: 5000,
      dueDate: "2024-01-15",
      daysOverdue: 5,
    },
    {
      id: 3,
      studentName: "Mary Johnson",
      class: "Grade 9A",
      feeType: "Activity Fee",
      amount: 3000,
      dueDate: "2024-01-25",
      daysOverdue: 0,
    },
  ];

  const recentVisitors = [
    {
      id: 1,
      name: "Mrs. Sarah Johnson",
      purpose: "Student Enrollment",
      time: "10:30 AM",
      status: "Waiting",
    },
    {
      id: 2,
      name: "Mr. David Wilson",
      purpose: "Fee Payment",
      time: "11:15 AM",
      status: "Completed",
    },
    {
      id: 3,
      name: "Dr. Mary Brown",
      purpose: "Meeting with Principal",
      time: "2:00 PM",
      status: "In Progress",
    },
  ];

  const upcomingAppointments = [
    {
      id: 1,
      visitor: "Mrs. Grace Ochieng",
      purpose: "Student Transfer",
      time: "3:30 PM",
      date: "Today",
    },
    {
      id: 2,
      visitor: "Mr. Peter Kamau",
      purpose: "Academic Records",
      time: "9:00 AM",
      date: "Tomorrow",
    },
    {
      id: 3,
      visitor: "Board Members",
      purpose: "Monthly Meeting",
      time: "10:00 AM",
      date: "Friday",
    },
  ];

  const pendingTasks = [
    {
      id: 1,
      task: "Process new student applications",
      priority: "High",
      dueDate: "Today",
    },
    {
      id: 2,
      task: "Prepare board meeting documents",
      priority: "Medium",
      dueDate: "Tomorrow",
    },
    {
      id: 3,
      task: "Update student records database",
      priority: "Low",
      dueDate: "This Week",
    },
    {
      id: 4,
      task: "Send parent communication letters",
      priority: "High",
      dueDate: "Today",
    },
  ];

  const recentCalls = [
    {
      id: 1,
      caller: "Parent - Jane Doe",
      purpose: "Absence notification",
      time: "9:45 AM",
      duration: "3 min",
    },
    {
      id: 2,
      caller: "Ministry of Education",
      purpose: "Inspection schedule",
      time: "10:20 AM",
      duration: "8 min",
    },
    {
      id: 3,
      caller: "Supply Company",
      purpose: "Delivery confirmation",
      time: "11:05 AM",
      duration: "5 min",
    },
  ];

  return (
    <div className="min-h-full bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Top Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="flex items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Secretary Dashboard
            </h1>
            <p className="text-gray-600 text-sm mt-1">
              Welcome back! Manage school operations efficiently.
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
                5
              </span>
            </div>
            <div className="flex items-center space-x-3 bg-gradient-to-r from-primary-green to-secondary-navy rounded-lg p-3 text-white">
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <span className="text-sm">👩‍💼</span>
              </div>
              <div>
                <p className="font-semibold text-sm">Ms. Alice Wanjiku</p>
                <p className="text-xs opacity-90">School Secretary</p>
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
            {/* Today's Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">
                      Visitors Today
                    </p>
                    <p className="text-3xl font-bold text-gray-900">
                      {todayStats.visitorsToday}
                    </p>
                    <p className="text-xs text-primary-green mt-1">
                      ↗ +3 from yesterday
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
                      Calls Answered
                    </p>
                    <p className="text-3xl font-bold text-gray-900">
                      {todayStats.callsAnswered}
                    </p>
                    <p className="text-xs text-secondary-navy mt-1">
                      → Average response time: 2 rings
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
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">
                      Documents Processed
                    </p>
                    <p className="text-3xl font-bold text-gray-900">
                      {todayStats.documentsProcessed}
                    </p>
                    <p className="text-xs text-primary-green mt-1">
                      ↗ +5 from yesterday
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
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">
                      Appointments Scheduled
                    </p>
                    <p className="text-3xl font-bold text-gray-900">
                      {todayStats.appointmentsScheduled}
                    </p>
                    <p className="text-xs text-secondary-navy mt-1">
                      → 3 more pending approval
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
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Fee Management Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">
                      Fees Collected Today
                    </p>
                    <p className="text-3xl font-bold text-gray-900">
                      ₦{todayStats.feesCollectedToday.toLocaleString()}
                    </p>
                    <p className="text-xs text-primary-green mt-1">
                      ↗ {todayStats.paymentsToday} payments processed
                    </p>
                  </div>
                  <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl">
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
                      Pending Payments
                    </p>
                    <p className="text-3xl font-bold text-gray-900">
                      {todayStats.pendingPayments}
                    </p>
                    <p className="text-xs text-orange-600 mt-1">
                      → Requires follow-up
                    </p>
                  </div>
                  <div className="p-3 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl">
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
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
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
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                {[
                  {
                    name: "Register Visitor",
                    icon: "👥",
                    color: "from-primary-green to-green-600",
                  },
                  {
                    name: "Schedule Appointment",
                    icon: "📅",
                    color: "from-secondary-navy to-gray-800",
                  },
                  {
                    name: "Process Document",
                    icon: "📄",
                    color: "from-primary-green to-green-700",
                  },
                  {
                    name: "Send Communication",
                    icon: "📧",
                    color: "from-secondary-navy to-blue-900",
                  },
                  {
                    name: "Update Fees",
                    icon: "💰",
                    color: "from-green-500 to-emerald-600",
                  },
                  {
                    name: "Print Records",
                    icon: "🖨️",
                    color: "from-primary-green to-green-600",
                  },
                  {
                    name: "Update Database",
                    icon: "💾",
                    color: "from-secondary-navy to-gray-800",
                  },
                ].map((action, index) => (
                  <button
                    key={index}
                    className={`p-4 bg-gradient-to-r ${action.color} text-white rounded-lg hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1`}
                  >
                    <div className="text-2xl mb-2">{action.icon}</div>
                    <div className="text-xs font-medium">{action.name}</div>
                  </button>
                ))}
              </div>
            </div>
            {/* Main Dashboard Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Recent Visitors */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Recent Visitors
                  </h3>
                  <button className="text-primary-green hover:text-green-700 text-sm font-medium">
                    View All
                  </button>
                </div>
                <div className="space-y-4">
                  {recentVisitors.map((visitor) => (
                    <div
                      key={visitor.id}
                      className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                    >
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">
                          {visitor.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {visitor.purpose}
                        </p>
                        <p className="text-xs text-gray-400">{visitor.time}</p>
                      </div>
                      <span
                        className={`px-2 py-1 text-xs font-semibold rounded-full ${
                          visitor.status === "Completed"
                            ? "bg-green-100 text-green-800"
                            : visitor.status === "In Progress"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {visitor.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming Appointments */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Upcoming Appointments
                  </h3>
                  <button className="text-primary-green hover:text-green-700 text-sm font-medium">
                    Add New
                  </button>
                </div>
                <div className="space-y-3">
                  {upcomingAppointments.map((appointment) => (
                    <div
                      key={appointment.id}
                      className="p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg hover:from-blue-50 hover:to-indigo-50 transition-all duration-200 cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {appointment.visitor}
                          </p>
                          <p className="text-xs text-gray-600">
                            {appointment.purpose}
                          </p>
                          <p className="text-xs text-primary-green font-medium">
                            {appointment.date} at {appointment.time}
                          </p>
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
                    </div>
                  ))}
                </div>
              </div>

              {/* Pending Tasks */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Pending Tasks
                  </h3>
                  <button className="text-primary-green hover:text-green-700 text-sm font-medium">
                    Add Task
                  </button>
                </div>
                <div className="space-y-3">
                  {pendingTasks.map((task) => (
                    <div
                      key={task.id}
                      className="p-3 border border-gray-200 rounded-lg hover:border-primary-green transition-colors duration-200"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">
                            {task.task}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            Due: {task.dueDate}
                          </p>
                        </div>
                        <span
                          className={`px-2 py-1 text-xs font-semibold rounded-full ${
                            task.priority === "High"
                              ? "bg-red-100 text-red-800"
                              : task.priority === "Medium"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-green-100 text-green-800"
                          }`}
                        >
                          {task.priority}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Communication & Records Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Calls Log */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Recent Calls
                  </h3>
                  <button className="text-primary-green hover:text-green-700 text-sm font-medium">
                    View Call Log
                  </button>
                </div>
                <div className="space-y-4">
                  {recentCalls.map((call) => (
                    <div
                      key={call.id}
                      className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                    >
                      <div className="w-10 h-10 bg-primary-green bg-opacity-10 rounded-full flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-primary-green"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">
                          {call.caller}
                        </p>
                        <p className="text-xs text-gray-500">{call.purpose}</p>
                        <p className="text-xs text-gray-400">
                          {call.time} • {call.duration}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Document Management */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Document Management
                </h3>
                <div className="space-y-4">
                  <div className="p-4 border-2 border-dashed border-gray-300 rounded-lg text-center hover:border-primary-green transition-colors duration-200">
                    <svg
                      className="w-12 h-12 text-gray-400 mx-auto mb-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <p className="text-sm text-gray-600">
                      Drop files here or click to upload
                    </p>
                    <button className="mt-2 px-4 py-2 bg-primary-green text-white rounded-lg hover:bg-green-700 transition-colors duration-200 text-sm">
                      Browse Files
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <button className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-center">
                      <svg
                        className="w-6 h-6 text-primary-green mx-auto mb-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      <p className="text-xs font-medium">Student Records</p>
                    </button>
                    <button className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-center">
                      <svg
                        className="w-6 h-6 text-secondary-navy mx-auto mb-1"
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
                      <p className="text-xs font-medium">Financial Records</p>
                    </button>
                    <button className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-center">
                      <svg
                        className="w-6 h-6 text-primary-green mx-auto mb-1"
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
                      <p className="text-xs font-medium">Staff Files</p>
                    </button>
                    <button className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-center">
                      <svg
                        className="w-6 h-6 text-secondary-navy mx-auto mb-1"
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
                      <p className="text-xs font-medium">Official Documents</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Communication Center */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Communication Center
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900">
                    Send Notifications
                  </h4>
                  <div className="space-y-2">
                    <button className="w-full p-3 bg-primary-green text-white rounded-lg hover:bg-green-700 transition-colors duration-200 text-sm">
                      📧 Email Parents
                    </button>
                    <button className="w-full p-3 bg-secondary-navy text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 text-sm">
                      📱 SMS Alert
                    </button>
                    <button className="w-full p-3 bg-primary-green text-white rounded-lg hover:bg-green-700 transition-colors duration-200 text-sm">
                      📢 School Notice
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900">
                    Generate Reports
                  </h4>
                  <div className="space-y-2">
                    <button className="w-full p-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 text-sm">
                      📊 Attendance Report
                    </button>
                    <button className="w-full p-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 text-sm">
                      💰 Fee Collection Report
                    </button>
                    <button className="w-full p-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 text-sm">
                      👥 Visitor Log Report
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900">Quick Access</h4>
                  <div className="space-y-2">
                    <button className="w-full p-3 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors duration-200 text-sm">
                      📞 Emergency Contacts
                    </button>
                    <button className="w-full p-3 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors duration-200 text-sm">
                      🏥 Medical Records
                    </button>
                    <button className="w-full p-3 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors duration-200 text-sm">
                      📋 Forms & Templates
                    </button>
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

export default SecretaryDashboard;
