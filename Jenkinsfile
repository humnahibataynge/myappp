pipeline{
    agent any
    parameters {
    string(name: 'Registry', defaultValue: 'myregistry', description: 'docker registry')
    string(name: 'Image', defaultValue: 'myimage', description: 'docker image name')
  }

    stages{
        stage("scm-checkout"){
            checkout scm
        }
        stage("docker-build"){
            script{
            sh 'docker build -t myimage .'
            }
        }
        stage("docker-tag"){
          script{
            sh 'docker tag ${Registry}/${Image}}:${env.BUILD_ID} myimage'
            }
        }
        stage("docker-push"){
            script{
            sh 'docker push ${Registry}/${Image}}:${env.BUILD_ID}'
            }
        }
    }
}
