pipeline{
    agent any
    parameters {
    string(name: 'Repo', defaultValue: '', description: 'docker registry')
    string(name: 'Image', defaultValue: '', description: 'docker image name')
    }

    stages{

        stage('scm-checkout'){
            steps{
            checkout scm
            }
        }
        stage('docker-build'){
             steps{
            script{
            sh 'docker build -t myimage .'
            }
             }
        }
        stage('docker-tag'){
             steps{
            script{
            sh 'docker tag ${Repo}/${Image}}:${env.BUILD_ID} myimage'
            }
             }
        }
        stage('docker-push'){
             steps{
            script{
            sh 'docker push ${Repo}/${Image}}:${env.BUILD_ID}'
            }
             }
        }
    }
}
