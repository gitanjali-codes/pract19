import { useState } from "react";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Gitanjali jha", course: "BCA", city: "Mehsana" },
    { id: 2, name: "Riya Patel", course: "BCA", city: "Ahmedabad" },
    { id: 3, name: "Aarav Shah", course: "BBA", city: "Gandhinagar" },
    { id: 4, name: "Neha Sharma", course: "BCA", city: "Patan" },
  ]);

  function deleteStudent(id) {
    setStudents((current) =>
      current.filter((student) => student.id !== id)
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-rose-100 to-purple-200 px-4 py-12 text-slate-900 sm:px-8">
      <div className="mx-auto max-w-4xl">

        <header className="mb-10 text-center">
          <span className="mb-5 inline-block rounded-full border-2 border-orange-500 bg-orange-50 px-6 py-2 text-xs font-black tracking-[0.2em] text-orange-700 shadow-md transition duration-300 hover:scale-105 hover:bg-orange-100">
            ✦ STUDENT MANAGEMENT
          </span>

          <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
            Delete{" "}
            <span className="bg-gradient-to-r from-orange-600 via-rose-600 to-purple-700 bg-clip-text text-transparent">
              Student
            </span>
          </h1>

          <p className="mt-4 text-slate-600">
            Manage student records with a beautiful interface.
          </p>
        </header>

        <main className="rounded-3xl border-2 border-white bg-white/80 p-5 shadow-2xl shadow-purple-900/15 backdrop-blur-xl transition duration-300 hover:border-orange-300 sm:p-8">

          <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-black text-slate-900">
                Student List
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                All registered student records
              </p>
            </div>

            <div className="rounded-2xl border-2 border-orange-300 bg-gradient-to-br from-orange-100 to-rose-100 px-5 py-3 text-center transition duration-300 hover:-translate-y-1 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-200">
              <p className="text-xs font-extrabold tracking-wider text-orange-700">
                TOTAL STUDENTS
              </p>
              <p className="text-3xl font-black text-slate-900">
                {students.length}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {students.map((student) => (
              <div
                key={student.id}
                className="group flex flex-col gap-4 rounded-2xl border-2 border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-400 hover:shadow-xl hover:shadow-orange-100 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border-2 border-orange-300 bg-gradient-to-br from-orange-500 to-rose-600 text-2xl font-black text-white shadow-md transition duration-300 group-hover:rotate-3 group-hover:scale-110 group-hover:border-purple-400">
                    {student.name.charAt(0)}
                  </div>

                  <div>
                    <h3 className="text-lg font-extrabold text-slate-900 transition-colors group-hover:text-orange-700">
                      {student.name}
                    </h3>

                    <p className="mt-1 text-sm text-slate-600">
                      {student.course}
                      <span className="mx-2 text-orange-500">•</span>
                      {student.city}
                    </p>

                    <span className="mt-2 inline-block rounded-md border border-purple-200 bg-purple-50 px-3 py-1 text-xs font-bold text-purple-700">
                      STUDENT ID: {student.id}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => deleteStudent(student.id)}
                  className="rounded-xl border-2 border-rose-600 bg-gradient-to-r from-rose-600 to-red-600 px-6 py-3 font-extrabold text-white shadow-md shadow-rose-200 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-red-800 hover:from-red-700 hover:to-rose-700 hover:shadow-xl hover:shadow-rose-200 active:scale-95"
                >
                  🗑 Delete Student
                </button>
              </div>
            ))}

            {students.length === 0 && (
              <div className="rounded-2xl border-2 border-dashed border-orange-300 bg-orange-50 px-5 py-12 text-center transition duration-300 hover:border-orange-500">
                <p className="text-5xl">📭</p>
                <h3 className="mt-4 text-2xl font-black text-orange-700">
                  No Students Found
                </h3>
                <p className="mt-2 text-slate-500">
                  All student records have been deleted.
                </p>
              </div>
            )}
          </div>
        </main>

        <footer className="mt-7 text-center">
          <p className="text-sm font-bold text-slate-500 transition-colors hover:text-orange-700">
            ✦ Built with React + Tailwind CSS ✦
          </p>
        </footer>

      </div>
    </div>
  );
}

export default App;