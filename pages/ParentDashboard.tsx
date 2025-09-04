import React, { useState } from "react";

const ParentDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedChild, setSelectedChild] = useState(0);

  // Mock parent and children data
  const parentInfo = {
    name: "Mr. John Ochieng",
    email: "john.ochieng@email.com",
    phone: "+254 712 345 678",
    address: "123 Nairobi Street, Nairobi",
  };

  const children = [
    {
      id: 1,
      name: "Sarah Ochieng",
      class: "Grade 10A",
      rollNo: "10A015",
      admissionNo: "EB2024015",
      classTeacher: "Mrs. Sarah Johnson",
      profileImage: "/api/placeholder/80/80",
    },
    {
      id: 2,
      name: "Michael Ochieng",
      class: "Grade 7B",
      rollNo: "7B022",
      admissionNo: "EB2024022",
      classTeacher: "Mr. David Wilson",
      profileImage: "/api/placeholder/80/80",
    },
  ];

  const currentChild = children[selectedChild];

  // Academic data for selected child
  const academicData = {
    currentGrades: [
      {
        subject: "Mathematics",
        grade: "B+",
        score: 87,
        teacher: "Mrs. Johnson",
        lastTest: "85%",
      },
      {
        subject: "English",
        grade: "A-",
        score: 89,
        teacher: "Mr. Smith",
        lastTest: "92%",
      },
      {
        subject: "Physics",
        grade: "B",
        score: 82,
        teacher: "Dr. Brown",
        lastTest: "78%",
      },
      {
        subject: "Chemistry",
        grade: "B+",
        score: 86,
        teacher: "Ms. Davis",
        lastTest: "88%",
      },
      {
        subject: "Biology",
        grade: "A",
        score: 91,
        teacher: "Mr. Wilson",
        lastTest: "94%",
      },
      {
        subject: "History",
        grade: "B+",
        score: 84,
        teacher: "Mrs. Taylor",
        lastTest: "81%",
      },
    ],
    overallGPA: 3.65,
    classRank: 8,
    totalStudents: 32,
  };

  const attendanceData = {
    totalDays: 120,
    presentDays: 112,
    absentDays: 8,
    lateArrivals: 3,
    attendanceRate: 93.3,
    recentAbsences: [
      { date: "2024-01-18", reason: "Sick", status: "Excused" },
      { date: "2024-01-15", reason: "Family Emergency", status: "Excused" },
      { date: "2024-01-10", reason: "Medical Appointment", status: "Excused" },
    ],
  };

  const feeInformation = {
    totalFees: 85000,
    paidAmount: 60000,
    pendingAmount: 25000,
    nextDueDate: "2024-02-15",
    paymentHistory: [
      {
        date: "2024-01-15",
        amount: 30000,
        method: "Bank Transfer",
        receipt: "RCP001234",
        status: "Paid",
      },
      {
        date: "2023-12-10",
        amount: 30000,
        method: "Cash",
        receipt: "RCP001198",
        status: "Paid",
      },
      {
        date: "2023-11-05",
        amount: 25000,
        method: "Mobile Money",
        receipt: "RCP001156",
        status: "Paid",
      },
    ],
    feeStructure: [
      { item: "Tuition Fee", amount: 45000, status: "Partially Paid" },
      { item: "Laboratory Fee", amount: 15000, status: "Paid" },
      { item: "Library Fee", amount: 8000, status: "Paid" },
      { item: "Sports Fee", amount: 12000, status: "Pending" },
      { item: "Examination Fee", amount: 5000, status: "Pending" },
    ],
  };

  const upcomingEvents = [
    {
      id: 1,
      title: "Parent-Teacher Conference",
      date: "2024-01-25",
      time: "2:00 PM",
      type: "Meeting",
    },
    {
      id: 2,
      title: "Mid-term Examinations",
      date: "2024-02-05",
      time: "8:00 AM",
      type: "Exam",
    },
    {
      id: 3,
      title: "Sports Day",
      date: "2024-02-15",
      time: "9:00 AM",
      type: "Event",
    },
    {
      id: 4,
      title: "Science Fair",
      date: "2024-02-20",
      time: "10:00 AM",
      type: "Event",
    },
  ];

  const recentCommunications = [
    {
      id: 1,
      from: "Mrs. Sarah Johnson",
      subject: "Sarah's Academic Progress",
      message:
        "Sarah is doing well in mathematics. Please encourage her to practice more word problems.",
      date: "2024-01-20",
      type: "Academic",
      read: false,
    },
    {
      id: 2,
      from: "School Administration",
      subject: "Fee Payment Reminder",
      message:
        "This is a reminder that the next fee payment is due on February 15th, 2024.",
      date: "2024-01-18",
      type: "Finance",
      read: true,
    },
    {
      id: 3,
      from: "Mr. David Wilson",
      subject: "Michael's Behavior Commendation",
      message:
        "Michael showed excellent leadership during today's group project. Well done!",
      date: "2024-01-17",
      type: "Behavior",
      read: true,
    },
  ];

  const assignments = [
    {
      id: 1,
      subject: "Mathematics",
      title: "Algebra Problem Set",
      dueDate: "2024-01-25",
      status: "Submitted",
      grade: "B+",
      teacher: "Mrs. Johnson",
    },
    {
      id: 2,
      subject: "English",
      title: "Essay on Climate Change",
      dueDate: "2024-01-28",
      status: "In Progress",
      grade: "-",
      teacher: "Mr. Smith",
    },
    {
      id: 3,
      subject: "Physics",
      title: "Lab Report - Motion",
      dueDate: "2024-01-30",
      status: "Not Started",
      grade: "-",
      teacher: "Dr. Brown",
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
                <span className="text-white font-bold text-lg">👨‍👩‍👧‍👦</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Parent Portal
                </h1>
                <p className="text-gray-600 text-sm">
                  Welcome, {parentInfo.name}
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
                  {recentCommunications.filter((c) => !c.read).length}
                </span>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">
                  {children.length} Children
                </p>
                <p className="text-xs text-gray-500">Active Students</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Child Selection */}
      {children.length > 1 && (
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-gray-700">
                Select Child:
              </span>
              <div className="flex space-x-2">
                {children.map((child, index) => (
                  <button
                    key={child.id}
                    onClick={() => setSelectedChild(index)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedChild === index
                        ? "bg-primary-green text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {child.name} ({child.class})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex space-x-8">
            {[
              { id: "overview", label: "Overview", icon: "📊" },
              { id: "academics", label: "Academic Progress", icon: "📚" },
              { id: "attendance", label: "Attendance", icon: "📅" },
              { id: "fees", label: "Fees & Payments", icon: "💰" },
              { id: "communications", label: "Communications", icon: "📧" },
              { id: "events", label: "Events & Calendar", icon: "🗓️" },
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
            {/* Child Info Card */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center space-x-6">
                <div className="w-20 h-20 bg-primary-green rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">
                    {currentChild.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {currentChild.name}
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3">
                    <div>
                      <p className="text-xs text-gray-500">Class</p>
                      <p className="text-sm font-medium text-gray-900">
                        {currentChild.class}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Roll Number</p>
                      <p className="text-sm font-medium text-gray-900">
                        {currentChild.rollNo}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Admission No</p>
                      <p className="text-sm font-medium text-gray-900">
                        {currentChild.admissionNo}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Class Teacher</p>
                      <p className="text-sm font-medium text-gray-900">
                        {currentChild.classTeacher}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">
                      Overall GPA
                    </p>
                    <p className="text-3xl font-bold text-gray-900">
                      {academicData.overallGPA}
                    </p>
                    <p className="text-xs text-primary-green mt-1">
                      Rank {academicData.classRank}/{academicData.totalStudents}
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
                      Attendance
                    </p>
                    <p className="text-3xl font-bold text-gray-900">
                      {attendanceData.attendanceRate}%
                    </p>
                    <p className="text-xs text-secondary-navy mt-1">
                      {attendanceData.presentDays}/{attendanceData.totalDays}{" "}
                      days
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
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">
                      Pending Fees
                    </p>
                    <p className="text-3xl font-bold text-gray-900">
                      KES {feeInformation.pendingAmount.toLocaleString()}
                    </p>
                    <p className="text-xs text-orange-600 mt-1">
                      Due: {feeInformation.nextDueDate}
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
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">
                      Unread Messages
                    </p>
                    <p className="text-3xl font-bold text-gray-900">
                      {recentCommunications.filter((c) => !c.read).length}
                    </p>
                    <p className="text-xs text-blue-600 mt-1">From teachers</p>
                  </div>
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl">
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
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Grades */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Recent Grades
                </h3>
                <div className="space-y-4">
                  {academicData.currentGrades
                    .slice(0, 4)
                    .map((grade, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg"
                      >
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {grade.subject}
                          </p>
                          <p className="text-xs text-gray-500">
                            {grade.teacher}
                          </p>
                        </div>
                        <div className="text-right">
                          <span
                            className={`px-3 py-1 text-sm font-semibold rounded-full ${
                              grade.grade.startsWith("A")
                                ? "bg-green-100 text-green-800"
                                : grade.grade.startsWith("B")
                                ? "bg-blue-100 text-blue-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {grade.grade}
                          </span>
                          <p className="text-xs text-gray-500 mt-1">
                            {grade.score}%
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              {/* Upcoming Events */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Upcoming Events
                </h3>
                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <div
                      key={event.id}
                      className="p-4 border border-gray-200 rounded-lg hover:border-primary-green transition-colors"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">
                            {event.title}
                          </p>
                          <p className="text-xs text-gray-500">
                            {event.date} at {event.time}
                          </p>
                        </div>
                        <span
                          className={`px-2 py-1 text-xs font-semibold rounded-full ${
                            event.type === "Meeting"
                              ? "bg-blue-100 text-blue-800"
                              : event.type === "Exam"
                              ? "bg-red-100 text-red-800"
                              : "bg-green-100 text-green-800"
                          }`}
                        >
                          {event.type}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Academic Progress Tab */}
        {activeTab === "academics" && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Academic Performance - {currentChild.name}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-medium text-green-800">Overall GPA</h4>
                  <p className="text-2xl font-bold text-green-900">
                    {academicData.overallGPA}
                  </p>
                  <p className="text-sm text-green-600">Out of 4.0</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-medium text-blue-800">Class Rank</h4>
                  <p className="text-2xl font-bold text-blue-900">
                    {academicData.classRank}
                  </p>
                  <p className="text-sm text-blue-600">
                    Out of {academicData.totalStudents} students
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <h4 className="font-medium text-purple-800">Subjects</h4>
                  <p className="text-2xl font-bold text-purple-900">
                    {academicData.currentGrades.length}
                  </p>
                  <p className="text-sm text-purple-600">Currently enrolled</p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Subject
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Teacher
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Current Grade
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Score
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Last Test
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {academicData.currentGrades.map((grade, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {grade.subject}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {grade.teacher}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-3 py-1 text-sm font-semibold rounded-full ${
                              grade.grade.startsWith("A")
                                ? "bg-green-100 text-green-800"
                                : grade.grade.startsWith("B")
                                ? "bg-blue-100 text-blue-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {grade.grade}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {grade.score}%
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {grade.lastTest}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Assignments */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Recent Assignments
              </h3>
              <div className="space-y-4">
                {assignments.map((assignment) => (
                  <div
                    key={assignment.id}
                    className="p-4 border border-gray-200 rounded-lg hover:border-primary-green transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">
                          {assignment.title}
                        </p>
                        <p className="text-xs text-gray-500">
                          {assignment.subject} • {assignment.teacher}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          Due: {assignment.dueDate}
                        </p>
                      </div>
                      <div className="flex flex-col items-end space-y-1">
                        <span
                          className={`px-2 py-1 text-xs font-semibold rounded-full ${
                            assignment.status === "Submitted"
                              ? "bg-green-100 text-green-800"
                              : assignment.status === "In Progress"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {assignment.status}
                        </span>
                        {assignment.grade !== "-" && (
                          <span className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">
                            Grade: {assignment.grade}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Attendance Tab */}
        {activeTab === "attendance" && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Attendance Record - {currentChild.name}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-medium text-green-800">Present Days</h4>
                  <p className="text-2xl font-bold text-green-900">
                    {attendanceData.presentDays}
                  </p>
                  <p className="text-sm text-green-600">
                    Out of {attendanceData.totalDays}
                  </p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h4 className="font-medium text-red-800">Absent Days</h4>
                  <p className="text-2xl font-bold text-red-900">
                    {attendanceData.absentDays}
                  </p>
                  <p className="text-sm text-red-600">Total absences</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <h4 className="font-medium text-yellow-800">Late Arrivals</h4>
                  <p className="text-2xl font-bold text-yellow-900">
                    {attendanceData.lateArrivals}
                  </p>
                  <p className="text-sm text-yellow-600">This term</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-medium text-blue-800">Attendance Rate</h4>
                  <p className="text-2xl font-bold text-blue-900">
                    {attendanceData.attendanceRate}%
                  </p>
                  <p className="text-sm text-blue-600">Overall</p>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-4">
                  Recent Absences
                </h4>
                <div className="space-y-3">
                  {attendanceData.recentAbsences.map((absence, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {absence.date}
                        </p>
                        <p className="text-xs text-gray-600">
                          {absence.reason}
                        </p>
                      </div>
                      <span
                        className={`px-2 py-1 text-xs font-semibold rounded-full ${
                          absence.status === "Excused"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {absence.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Fees Tab */}
        {activeTab === "fees" && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Fee Information - {currentChild.name}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-medium text-blue-800">Total Fees</h4>
                  <p className="text-2xl font-bold text-blue-900">
                    KES {feeInformation.totalFees.toLocaleString()}
                  </p>
                  <p className="text-sm text-blue-600">Academic year</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-medium text-green-800">Amount Paid</h4>
                  <p className="text-2xl font-bold text-green-900">
                    KES {feeInformation.paidAmount.toLocaleString()}
                  </p>
                  <p className="text-sm text-green-600">
                    {(
                      (feeInformation.paidAmount / feeInformation.totalFees) *
                      100
                    ).toFixed(1)}
                    % completed
                  </p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h4 className="font-medium text-red-800">Pending Amount</h4>
                  <p className="text-2xl font-bold text-red-900">
                    KES {feeInformation.pendingAmount.toLocaleString()}
                  </p>
                  <p className="text-sm text-red-600">
                    Due: {feeInformation.nextDueDate}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-4">
                    Fee Structure
                  </h4>
                  <div className="space-y-3">
                    {feeInformation.feeStructure.map((fee, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 border border-gray-200 rounded-lg"
                      >
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {fee.item}
                          </p>
                          <p className="text-xs text-gray-600">
                            KES {fee.amount.toLocaleString()}
                          </p>
                        </div>
                        <span
                          className={`px-2 py-1 text-xs font-semibold rounded-full ${
                            fee.status === "Paid"
                              ? "bg-green-100 text-green-800"
                              : fee.status === "Partially Paid"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {fee.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-4">
                    Payment History
                  </h4>
                  <div className="space-y-3">
                    {feeInformation.paymentHistory.map((payment, index) => (
                      <div
                        key={index}
                        className="p-3 bg-green-50 border border-green-200 rounded-lg"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              KES {payment.amount.toLocaleString()}
                            </p>
                            <p className="text-xs text-gray-600">
                              {payment.date} • {payment.method}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-gray-500">
                              Receipt: {payment.receipt}
                            </p>
                            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                              {payment.status}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-blue-900">
                      Make Payment
                    </p>
                    <p className="text-xs text-blue-700">
                      Pay your child's school fees online
                    </p>
                  </div>
                  <button className="px-4 py-2 bg-primary-green text-white rounded-lg hover:bg-green-700 transition-colors">
                    Pay Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Communications Tab */}
        {activeTab === "communications" && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Communications
                </h3>
                <button className="px-4 py-2 bg-primary-green text-white rounded-lg hover:bg-green-700 transition-colors">
                  Compose Message
                </button>
              </div>

              <div className="space-y-4">
                {recentCommunications.map((comm) => (
                  <div
                    key={comm.id}
                    className={`p-4 border rounded-lg hover:border-primary-green transition-colors ${
                      !comm.read
                        ? "bg-blue-50 border-blue-200"
                        : "border-gray-200"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <p className="text-sm font-medium text-gray-900">
                            {comm.from}
                          </p>
                          {!comm.read && (
                            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                              New
                            </span>
                          )}
                          <span
                            className={`px-2 py-1 text-xs font-semibold rounded-full ${
                              comm.type === "Academic"
                                ? "bg-green-100 text-green-800"
                                : comm.type === "Finance"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-purple-100 text-purple-800"
                            }`}
                          >
                            {comm.type}
                          </span>
                        </div>
                        <p className="text-sm font-medium text-gray-900 mb-1">
                          {comm.subject}
                        </p>
                        <p className="text-sm text-gray-600 mb-2">
                          {comm.message}
                        </p>
                        <p className="text-xs text-gray-500">{comm.date}</p>
                      </div>
                      <button className="text-primary-green hover:text-green-700 text-sm font-medium">
                        Reply
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Events Tab */}
        {activeTab === "events" && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Upcoming Events & Calendar
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {upcomingEvents.map((event) => (
                  <div
                    key={event.id}
                    className="p-4 border border-gray-200 rounded-lg hover:border-primary-green transition-colors"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <span
                        className={`px-2 py-1 text-xs font-semibold rounded-full ${
                          event.type === "Meeting"
                            ? "bg-blue-100 text-blue-800"
                            : event.type === "Exam"
                            ? "bg-red-100 text-red-800"
                            : "bg-green-100 text-green-800"
                        }`}
                      >
                        {event.type}
                      </span>
                    </div>
                    <h4 className="text-sm font-medium text-gray-900 mb-2">
                      {event.title}
                    </h4>
                    <div className="space-y-1">
                      <p className="text-xs text-gray-600 flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
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
                        {event.date}
                      </p>
                      <p className="text-xs text-gray-600 flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
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
                        {event.time}
                      </p>
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

export default ParentDashboard;
