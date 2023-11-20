pipeline{
    agent any
    parameters {
    string(name: 'Repo', defaultValue: '', description: 'docker registry')
    string(name: 'Image', defaultValue: '', description: 'docker image name')
    }

    stages{

        stage('scm-checkout'){
            checkout scm
        }
        stage('docker-build'){
            script{
            sh 'docker build -t myimage .'
            }
        }
        stage('docker-tag'){
            script{
            sh 'docker tag ${Repo}/${Image}}:${env.BUILD_ID} myimage'
            }
        }
        stage('docker-push'){
            script{
            sh 'docker push ${Repo}/${Image}}:${env.BUILD_ID}'
            }
        }
    }
}
