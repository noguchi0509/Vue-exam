Vue.component('student-form', {
    template:
    `
    <div>
      <form id="sample-form" @submit.prevent="onSubmit">
	      <label>名前:</label>
	      <input v-model="studentName">
	      <p>{{ studentName }}</p>
	      <label>コース:</label>
	      <input v-model="studentCourse"> 
	      <p>{{ studentCourse }}</p>
	      <label>受講期:</label>
	      <input v-model="studentTerm">    
	      <input type="submit" value="入力した生徒を追加する">
	    </form>
	    </div>
	    `,
    data() {
        return {
          studentId: 1,
          studentName: null,
          studentCourse: null,
          studentTerm: null,
        }
    },
    methods:{
        onSubmit() {
            let studentInfo = {
              studentName: this.studentName,
              studentId: this.studentId,
              studentCourse: this.studentCourse,
              studentTerm: this.studentTerm,
            }
            this.$emit('student-info-submitted',studentInfo)
            this.studentName = null
            this.studentId++
            this.studentCourse = null,
            this.studentTerm = null
        }
    },
})

var app = new Vue({
    el: '#student',
    data:{
    infos: [],
    },
    methods:{
        studentInfoReceived(studentInfo) {
            this.infos.push(studentInfo)
            }
        },
});