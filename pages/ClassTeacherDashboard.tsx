import React, { useState } from "react";

const ClassTeacherDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock data for class teacher
  const teacherInfo = {
    name: "Mrs. Sarah Johnson",
    class: "Grade 10A",
    subject: "Mathematics",
    totalStudents: 32,
    employeeId: "TCH001",
  };

  const classStats = {
    totalStudents: 32,
    presentToday: 29,
    absentToday: 3,
    attendanceRate: 90.6,
    averageGrade: 78.5,
    assignmentsPending: 8,
    behaviorIncidents: 2,
    parentMeetings: 5,
  };

  const todaySchedule = [
    {
      time: "8:00-8:45",
      subject: "Mathematics",
      activity: "Algebra Lesson",
      room: "Room 10A",
    },
    {
      time: "8:45-9:30",
      subject: "Class Period",
      activity: "Morning Assembly",
      room: "Room 10A",
    },
    {
      time: "9:30-10:15",
      subject: "Mathematics",
      activity: "Problem Solving",
      room: "Room 10A",
    },
    {
      time: "10:15-10:30",
      subject: "Break",
      activity: "Supervision",
      room: "Playground",
    },
    {
      time: "10:30-11:15",
      subject: "Free Period",
      activity: "Student Consultation",
      room: "Room 10A",
    },
    {
      time: "11:15-12:00",
      subject: "Mathematics",
      activity: "Quiz Review",
      room: "Room 10A",
    },
    {
      time: "12:00-1:00",
      subject: "Lunch",
      activity: "Lunch Supervision",
      room: "Cafeteria",
    },
    {
      time: "1:00-1:45",
      subject: "Class Period",
      activity: "Study Hall",
      room: "Room 10A",
    },
  ];

  const studentList = [
    {
      id: 1,
      name: "John Doe",
      rollNo: "10A001",
      attendance: 95,
      grade: "A",
      behavior: "Excellent",
      lastContact: "2024-01-15",
    },
    {
      id: 2,
      name: "Jane Smith",
      rollNo: "10A002",
      attendance: 88,
      grade: "B+",
      behavior: "Good",
      lastContact: "2024-01-10",
    },
    {
      id: 3,
      name: "Mike Johnson",
      rollNo: "10A003",
      attendance: 92,
      grade: "A-",
      behavior: "Good",
      lastContact: "2024-01-18",
    },
    {
      id: 4,
      name: "Sarah Wilson",
      rollNo: "10A004",
      attendance: 85,
      grade: "B",
      behavior: "Fair",
      lastContact: "2024-01-12",
    },
    {
      id: 5,
      name: "David Brown",
      rollNo: "10A005",
      attendance: 78,
      grade: "C+",
      behavior: "Needs Attention",
      lastContact: "2024-01-08",
    },
  ];

  const recentActivities = [
    {
      id: 1,
      type: "Assignment",
      description: "Submitted Algebra Quiz grades",
      time: "2 hours ago",
      status: "Completed",
    },
    {
      id: 2,
      type: "Parent Contact",
      description: "Called Mrs. Wilson about Sarah's attendance",
      time: "4 hours ago",
      status: "Completed",
    },
    {
      id: 3,
      type: "Behavior",
      description: "Recorded positive behavior for John Doe",
      time: "1 day ago",
      status: "Completed",
    },
    {
      id: 4,
      type: "Meeting",
      description: "Parent-teacher conference scheduled",
      time: "2 days ago",
      status: "Scheduled",
    },
  ];

  const upcomingTasks = [
    {
      id: 1,
      task: "Grade Mathematics Test Papers",
      priority: "High",
      dueDate: "Today",
      category: "Academic",
    },
    {
      id: 2,
      task: "Prepare Parent-Teacher Meeting Notes",
      priority: "Medium",
      dueDate: "Tomorrow",
      category: "Communication",
    },
    {
      id: 3,
      task: "Update Student Progress Reports",
      priority: "High",
      dueDate: "This Week",
      category: "Academic",
    },
    {
      id: 4,
      task: "Plan Next Week's Lessons",
      priority: "Medium",
      dueDate: "Friday",
      category: "Planning",
    },
    {
      id: 5,
      task: "Follow up on Absent Students",
      priority: "High",
      dueDate: "Today",
      category: "Welfare",
    },
  ];

  const behaviorIncidents = [
    {
      id: 1,
      student: "David Brown",
      incident: "Late to class",
      date: "2024-01-20",
      action: "Verbal Warning",
      severity: "Minor",
    },
    {
      id: 2,
      student: "Mike Johnson",
      incident: "Disrupting class",
      date: "2024-01-18",
      action: "Parent Contact",
      severity: "Moderate",
    },
  ];

  const parentCommunications = [
    {
      id: 1,
      parent: "Mrs. Wilson",
      student: "Sarah Wilson",
      type: "Phone Call",
      topic: "Attendance Concern",
      date: "2024-01-20",
      status: "Completed",
    },
    {
      id: 2,
      parent: "Mr. Brown",
      student: "David Brown",
      type: "Email",
      topic: "Behavior Update",
      date: "2024-01-19",
      status: "Sent",
    },
    {
      id: 3,
      parent: "Mrs. Doe",
      student: "John Doe",
      type: "Meeting",
      topic: "Academic Progress",
      date: "2024-01-22",
      status: "Scheduled",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary-green rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">👩‍🏫</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  {teacherInfo.name}
                </h1>
                <p className="text-gray-600 text-sm">
                  Class Teacher - {teacherInfo.class} • {teacherInfo.subject}{" "}
                  Teacher
                </p>
              </div>
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
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">
                  Employee ID: {teacherInfo.employeeId}
                </p>
                <p className="text-xs text-gray-500">
                  {teacherInfo.totalStudents} Students
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex space-x-8">
            {[
              { id: "overview", label: "Overview", icon: "📊" },
              { id: "students", label: "My Students", icon: "👥" },
              { id: "attendance", label: "Attendance", icon: "📅" },
              { id: "grades", label: "Grades", icon: "📝" },
              { id: "behavior", label: "Behavior", icon: "⭐" },
              { id: "parents", label: "Parent Communication", icon: "📞" },
              { id: "schedule", label: "Schedule", icon: "🕐" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                  activeTab === tab.id
                    ? "border-primary-green text-primary-green"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Class Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">
                      Total Students
                    </p>
                    <p className="text-3xl font-bold text-gray-900">
                      {classStats.totalStudents}
                    </p>
                    <p className="text-xs text-primary-green mt-1">
                      Active enrollment
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

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">
                      Present Today
                    </p>
                    <p className="text-3xl font-bold text-gray-900">
                      {classStats.presentToday}
                    </p>
                    <p className="text-xs text-secondary-navy mt-1">
                      {classStats.absentToday} absent
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
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">
                      Class Average
                    </p>
                    <p className="text-3xl font-bold text-gray-900">
                      {classStats.averageGrade}%
                    </p>
                    <p className="text-xs text-primary-green mt-1">
                      ↗ +2.3% this term
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
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">
                      Pending Tasks
                    </p>
                    <p className="text-3xl font-bold text-gray-900">
                      {upcomingTasks.length}
                    </p>
                    <p className="text-xs text-orange-600 mt-1">
                      Requires attention
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
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
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
                    name: "Take Attendance",
                    icon: "✅",
                    color: "from-primary-green to-green-600",
                  },
                  {
                    name: "Grade Assignments",
                    icon: "📝",
                    color: "from-secondary-navy to-gray-800",
                  },
                  {
                    name: "Contact Parent",
                    icon: "📞",
                    color: "from-primary-green to-green-700",
                  },
                  {
                    name: "Record Behavior",
                    icon: "⭐",
                    color: "from-secondary-navy to-blue-900",
                  },
                  {
                    name: "Update Progress",
                    icon: "📊",
                    color: "from-green-500 to-emerald-600",
                  },
                  {
                    name: "Schedule Meeting",
                    icon: "📅",
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

            {/* Dashboard Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Today's Schedule */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Today's Schedule
                </h3>
                <div className="space-y-3">
                  {todaySchedule.slice(0, 5).map((period, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg"
                    >
                      <div className="w-16 text-xs font-medium text-gray-600">
                        {period.time}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">
                          {period.subject}
                        </p>
                        <p className="text-xs text-gray-500">
                          {period.activity}
                        </p>
                      </div>
                      <div className="text-xs text-primary-green">
                        {period.room}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Activities */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Recent Activities
                </h3>
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div
                      key={activity.id}
                      className="flex items-start space-x-3"
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-xs ${
                          activity.type === "Assignment"
                            ? "bg-blue-100 text-blue-800"
                            : activity.type === "Parent Contact"
                            ? "bg-green-100 text-green-800"
                            : activity.type === "Behavior"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-purple-100 text-purple-800"
                        }`}
                      >
                        {activity.type === "Assignment"
                          ? "📝"
                          : activity.type === "Parent Contact"
                          ? "📞"
                          : activity.type === "Behavior"
                          ? "⭐"
                          : "📅"}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">
                          {activity.description}
                        </p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming Tasks */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Upcoming Tasks
                </h3>
                <div className="space-y-3">
                  {upcomingTasks.slice(0, 5).map((task) => (
                    <div
                      key={task.id}
                      className="p-3 border border-gray-200 rounded-lg hover:border-primary-green transition-colors"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">
                            {task.task}
                          </p>
                          <p className="text-xs text-gray-500">
                            {task.category} • Due: {task.dueDate}
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
          </div>
        )}
        {/* Students Tab */}
        {activeTab === "students" && (
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900">
                My Students - {teacherInfo.class}
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Student
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Roll No
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Attendance
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Grade
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Behavior
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Last Contact
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {studentList.map((student) => (
                    <tr key={student.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-primary-green rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-medium">
                              {student.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </span>
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900">
                              {student.name}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {student.rollNo}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 py-1 text-xs font-semibold rounded-full ${
                            student.attendance >= 90
                              ? "bg-green-100 text-green-800"
                              : student.attendance >= 80
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {student.attendance}%
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-3 py-1 text-sm font-semibold rounded-full ${
                            student.grade.startsWith("A")
                              ? "bg-green-100 text-green-800"
                              : student.grade.startsWith("B")
                              ? "bg-blue-100 text-blue-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {student.grade}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 py-1 text-xs font-semibold rounded-full ${
                            student.behavior === "Excellent"
                              ? "bg-green-100 text-green-800"
                              : student.behavior === "Good"
                              ? "bg-blue-100 text-blue-800"
                              : student.behavior === "Fair"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {student.behavior}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {student.lastContact}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-primary-green hover:text-green-700 mr-3">
                          View
                        </button>
                        <button className="text-secondary-navy hover:text-gray-800">
                          Contact
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Attendance Tab */}
        {activeTab === "attendance" && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Attendance Management
                </h3>
                <button className="px-4 py-2 bg-primary-green text-white rounded-lg hover:bg-green-700 transition-colors">
                  Take Attendance
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-medium text-green-800">Present Today</h4>
                  <p className="text-2xl font-bold text-green-900">
                    {classStats.presentToday}
                  </p>
                  <p className="text-sm text-green-600">
                    {(
                      (classStats.presentToday / classStats.totalStudents) *
                      100
                    ).toFixed(1)}
                    %
                  </p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h4 className="font-medium text-red-800">Absent Today</h4>
                  <p className="text-2xl font-bold text-red-900">
                    {classStats.absentToday}
                  </p>
                  <p className="text-sm text-red-600">
                    {(
                      (classStats.absentToday / classStats.totalStudents) *
                      100
                    ).toFixed(1)}
                    %
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-medium text-blue-800">Monthly Average</h4>
                  <p className="text-2xl font-bold text-blue-900">
                    {classStats.attendanceRate}%
                  </p>
                  <p className="text-sm text-blue-600">This month</p>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium text-gray-900">
                  Absent Students Today
                </h4>
                {studentList
                  .filter((s) => s.attendance < 90)
                  .slice(0, 3)
                  .map((student) => (
                    <div
                      key={student.id}
                      className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-200"
                    >
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {student.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {student.rollNo}
                        </p>
                      </div>
                      <button className="px-3 py-1 bg-primary-green text-white text-xs rounded-lg hover:bg-green-700">
                        Contact Parent
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}

        {/* Behavior Tab */}
        {activeTab === "behavior" && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Behavior Management
                </h3>
                <button className="px-4 py-2 bg-primary-green text-white rounded-lg hover:bg-green-700 transition-colors">
                  Record Behavior
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-4">
                    Recent Incidents
                  </h4>
                  <div className="space-y-3">
                    {behaviorIncidents.map((incident) => (
                      <div
                        key={incident.id}
                        className="p-4 border border-gray-200 rounded-lg"
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              {incident.student}
                            </p>
                            <p className="text-xs text-gray-600">
                              {incident.incident}
                            </p>
                            <p className="text-xs text-gray-500">
                              {incident.date}
                            </p>
                          </div>
                          <div className="text-right">
                            <span
                              className={`px-2 py-1 text-xs font-semibold rounded-full ${
                                incident.severity === "Minor"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : incident.severity === "Moderate"
                                  ? "bg-orange-100 text-orange-800"
                                  : "bg-red-100 text-red-800"
                              }`}
                            >
                              {incident.severity}
                            </span>
                            <p className="text-xs text-gray-500 mt-1">
                              {incident.action}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-4">
                    Positive Behaviors
                  </h4>
                  <div className="space-y-3">
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-sm font-medium text-green-900">
                        John Doe
                      </p>
                      <p className="text-xs text-green-700">
                        Helped classmate with assignment
                      </p>
                      <p className="text-xs text-green-600">Today</p>
                    </div>
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-sm font-medium text-green-900">
                        Jane Smith
                      </p>
                      <p className="text-xs text-green-700">
                        Excellent participation in class
                      </p>
                      <p className="text-xs text-green-600">Yesterday</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Parent Communication Tab */}
        {activeTab === "parents" && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Parent Communications
                </h3>
                <button className="px-4 py-2 bg-primary-green text-white rounded-lg hover:bg-green-700 transition-colors">
                  New Communication
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Parent
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Student
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Type
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Topic
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {parentCommunications.map((comm) => (
                      <tr key={comm.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {comm.parent}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {comm.student}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 py-1 text-xs font-semibold rounded-full ${
                              comm.type === "Phone Call"
                                ? "bg-blue-100 text-blue-800"
                                : comm.type === "Email"
                                ? "bg-green-100 text-green-800"
                                : "bg-purple-100 text-purple-800"
                            }`}
                          >
                            {comm.type}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {comm.topic}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {comm.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 py-1 text-xs font-semibold rounded-full ${
                              comm.status === "Completed"
                                ? "bg-green-100 text-green-800"
                                : comm.status === "Sent"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {comm.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Schedule Tab */}
        {activeTab === "schedule" && (
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900">
                Today's Schedule
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {todaySchedule.map((period, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-20 text-sm font-medium text-gray-700">
                      {period.time}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        {period.subject}
                      </p>
                      <p className="text-xs text-gray-600">{period.activity}</p>
                    </div>
                    <div className="text-sm text-primary-green font-medium">
                      {period.room}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClassTeacherDashboard;
