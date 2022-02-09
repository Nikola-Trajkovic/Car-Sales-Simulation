import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    token: '',
    userId: '',
    automobili: [],
    motori: [],
    upitAuto: [],
    upitMotor: [],
    update: []

  },
  mutations: {

    userId(state, userId){
      state.userId = userId;
      localStorage.userId = userId
    },

    removeUserId(state){
      state.userId = '';
      localStorage.userId = '';
    },

    setToken(state, token) {
      state.token = token;
      localStorage.token = token;
    },

    removeToken(state) {
      state.token = '';
      localStorage.token = '';
    },

    addAutomobili(state, automobili){
      state.automobili.push(automobili)
    },

    addMotori(state, motori){
      state.motori.push(motori)
    },

    addUpitAuto(state, upitAuto){
      state.upitAuto.push(upitAuto)
    },

    addUpitMotor(state, upitMotor){
      state.upitMotor.push(upitMotor)
    },

    addUpdate(state, update){
      state.update = update
    }

  },
  actions: {

    socket_oglas_auto({ commit }, msg) {
      const rec = JSON.parse(msg);
      commit('addUpitAuto', rec);
    },

    socket_oglas_motor({ commit }, msg) {
      const rec = JSON.parse(msg);
      commit('addUpitMotor', rec);
    },

    updateAuto({commit}, id){
      fetch(`http://localhost:10000/api/oglas_auto/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.token}`
          }
          })
          .then( res => res.json() )
          .then( data => {
            this.state.update = []
            

            //console.log(data);
            commit('addUpdate', data)

          

          });
    },

    updateMotor({commit}, id){
      fetch(`http://localhost:10000/api/oglas_motor/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.token}`
          }
          })
          .then( res => res.json() )
          .then( data => {
            this.state.update = []
           

              //console.log(data);
              commit('addUpdate', data)

           

          });
    },

    deleteAuto({commit}, data){

      const obj = {id : data}

      fetch('http://localhost:10000/api/oglas_auto', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.token}`
        },
        body: JSON.stringify(obj)
      })
        .then( res => res.json() )
        .then( el => {
            if (el.msg) {
                console.log(el.msg);
                alert(el.msg);
            } else {
                window.location.reload()
            }
            commit
        });

      

    },

    deleteMotor({commit}, data){

      const obj = {id : data}

      fetch('http://localhost:10000/api/oglas_motor', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.token}`
        },
        body: JSON.stringify(obj)
      })
        .then( res => res.json() )
        .then( el => {
            if (el.msg) {
                console.log(el.msg);
                alert(el.msg);
            } else {
                window.location.reload()
            }
            commit
        });

    },

    likes({commit}, data){

      
      fetch('http://localhost:10000/api/oglas_auto', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.token}`
        },
        body: JSON.stringify(data)
      })
        .then( res => res.json() )
        .then( el => {
            if (el.error) {
                window.location.reload();
                alert(el.error);
            } else {
                window.location.reload();
            }
            commit
        });

    },

    likesMotor({commit}, data){

      
      fetch('http://localhost:10000/api/oglas_motor', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.token}`
        },
        body: JSON.stringify(data)
      })
        .then( res => res.json() )
        .then( el => {
            if (el.error) {
                window.location.reload();
                alert(el.error);
            } else {
                window.location.reload();
            }
            commit
        });

    },
    

    fetchUpitAuto({commit}){

          fetch('http://localhost:10000/api/oglas_auto', {
          method: 'GET',
          })
          .then( res => res.json() )
          .then( data => {
            this.state.upitAuto = []
            data.forEach(element => {

              //console.log(element);
              commit('addUpitAuto', element)

            })

          });

    },

    fetchUpitMotor({commit}){
      fetch('http://localhost:10000/api/oglas_motor', {
        method: 'GET',
        })
        .then( res => res.json() )
        .then( data => {
          this.state.upitMotor = []
          data.forEach(element => {

            //console.log(element);
            commit('addUpitMotor', element)

          })

        });
    },


    fetchUnosMotor({commit}, data){

      fetch('http://localhost:10000/api/oglas_motor', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.token}`
                },
                body: JSON.stringify(data)
            })
                .then( res => res.json() )
                .then( el => {
                    if (el.error) {
                        window.location.reload();
                        alert(el.error);
                    } else {
                        window.location.reload();
                    }
                    commit
                });


    },



    fetchUnosAuto({commit} , data){


      fetch('http://localhost:10000/api/oglas_auto', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.token}`
                },
                body: JSON.stringify(data)
            })
                .then( res => res.json() )
                .then( el => {
                    if (el.error) {
                        window.location.reload();
                        alert(el.error);
                    } else {
                        window.location.reload();
                    }
                    commit
                });

    },

    fetchAutomobili({ commit }) {
      var item
      return new Promise((resolve) => {
        fetch('http://localhost:10000/api/auto', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${localStorage.token}`
        }
        })
        .then( res => res.json() )
        .then( data => {
            this.state.automobili = []
            data.forEach(element => {
              item = {id: element.id, marka: element.marka, model: element.model, godiste: element.godiste, kilometraza: element.kilometraza, menjac: element.menjac, gorivo: element.gorivo}
          
              commit('addAutomobili', item);
            });
            resolve(this.state.automobili)
            
        });
      
      })
    },

    fetchMotori({ commit }) {
      var item
      return new Promise( (resolve) => {
        fetch('http://localhost:10000/api/motor', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${localStorage.token}`
        }
        })
        .then( res => res.json() )
        .then( data => {
          this.state.motori = []
            data.forEach(element => {
              item = {id: element.id, marka: element.marka, model: element.model, godiste: element.godiste, kubikaza: element.kubikaza, kilometraza: element.kilometraza, tip:element.tip, gorivo: element.gorivo}
          
              commit('addMotori', item);
            });
            resolve(this.state.motori);
        });
      })
    },
  

    register({ commit }, obj) {
      fetch('http://127.0.0.1:9000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
      }).then( res => res.json() )
        .then( tkn => {commit('setToken', tkn.token),commit('userId', tkn.role)} );
    },

    login({ commit }, obj) {
      fetch('http://127.0.0.1:9000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    }).then( res => res.json() )
      .then( tkn => {
        if (tkn.msg) {
          alert(tkn.msg);
        } else {
          commit('setToken', tkn.token)
          commit('userId', tkn.role)
        }
      });
    }

  },
  modules: {
  }
})
