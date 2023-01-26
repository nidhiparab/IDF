import executeQuery from '../../../../lib/db'
import gradeConstants from '../../../../lib/grades';

export default async function getGradeByBgId(req, res) {
  let finalResult = [];
  const bg_id = req.query.bg_id;
  console.log(bg_id);
  let grades = await executeQuery({
    query: "SELECT `grade_id`, `student_id` FROM `grade` WHERE `bg_id` = ?;",
    values: [bg_id]
  })

  console.log(grades);
  for (const grade of grades) {

    let result = {
      student_id: null,
      grade_id: null,
      grade_qualities: {},
      grade_subjects: {},
      grade_intrests: {},
      grade_specifics: {},
    }

    result.student_id = grade.student_id;
    result.grade_id = grade.grade_id;
    let grade_id = grade.grade_id;

    let grade_qualities = await executeQuery({
      query: "SELECT * FROM `grade_qualities` WHERE `grade_id` = ?;",
      values: [grade_id]
    })
    grade_qualities = grade_qualities[0];
    delete grade_qualities.grade_id;

    for (const key in grade_qualities) {
      if (Object.hasOwnProperty.call(grade_qualities, key)) {
        const value = grade_qualities[key];
        result.grade_qualities[gradeConstants.grade_qualities.columns[key]] = gradeConstants.grade_qualities.options[value];
      }
    }

    let grade_subjects = await executeQuery({
      query: "SELECT * FROM `grade_subjects` WHERE `grade_id` = ?;",
      values: [grade_id]
    })
    grade_subjects = grade_subjects[0];
    delete grade_subjects.grade_id;

    for (const key in grade_subjects) {
      if (Object.hasOwnProperty.call(grade_subjects, key)) {
        const value = grade_subjects[key];
        result.grade_subjects[gradeConstants.grade_subjects.columns[key]] = gradeConstants.grade_subjects.options[value];
      }
    }

    let grade_intrests = await executeQuery({
      query: "SELECT * FROM `grade_intrests` WHERE `grade_id` = ?;",
      values: [grade_id]
    })
    grade_intrests = grade_intrests[0];
    delete grade_intrests.grade_id;

    for (const key in grade_intrests) {
      if (Object.hasOwnProperty.call(grade_intrests, key)) {
        const value = grade_intrests[key];
        result.grade_intrests[gradeConstants.grade_intrests.columns[key]] = gradeConstants.grade_intrests.options[value];
      }
    }

    let grade_specifics = await executeQuery({
      query: "SELECT * FROM `grade_specifics` WHERE `grade_id` = ?;",
      values: [grade_id]
    })
    grade_specifics = grade_specifics[0];
    delete grade_specifics.grade_id;

    for (const key in grade_specifics) {
      if (Object.hasOwnProperty.call(grade_specifics, key)) {
        const value = grade_specifics[key];
        result.grade_specifics[gradeConstants.grade_specifics.columns[key]] = value;
      }
    }
    console.log(result);

    finalResult.push(result);
  }

  res.json({ result: finalResult })

}