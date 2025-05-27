pipeline{
    agent any

    tools {
        nodejs "node24"
    }

    environment {
        DOCKER_USER = "pradeeshan"
        IMAGE_NAME = 'taxi-booking-frontend'
        IMAGE_TAG = 'latest'
        FULL_IMAGE_NAME = "${DOCKER_USER}/${IMAGE_NAME}:${IMAGE_TAG}"
        
    }
    
    stages{
        stage("Cleanup Workspace"){
            steps {
                cleanWs()
            }

        }
    
        stage("Checkout from SCM"){
            steps {
                git 'https://github.com/pradeeshan/taxi-booking.git'
            }

        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npm test'
            }
        }

        stage('SonarQube Analysis') {
            steps {
                script {
                    withSonarQubeEnv(credentialsId: 'sonar-token') {
                        bat 'npx sonar-scanner'
                    }
                }
            }
        }

        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }

        stage("Build Docker Image") {
            steps {
                script {
                    bat "docker build -t ${FULL_IMAGE_NAME} ."
                }
            }
        }

        stage('Trivy Scan') {
            steps {
                script {
                    bat "C:\\Users\\prade\\scoop\\shims\\trivy.exe image --exit-code 100 --severity HIGH,CRITICAL ${DOCKER_USER}/${IMAGE_NAME}:${IMAGE_TAG}"
                }
            }
        }

        stage("Push to Docker Hub") {
            steps {
                script {
                    withDockerRegistry(credentialsId: 'docker') {
                        bat "docker push ${FULL_IMAGE_NAME}"
                    }
                }
            }
        }

        stage("Deploy Container") {
            steps {
                script {
                    
                    bat """
                        docker rm -f ${IMAGE_NAME} || true
                        docker run -d --name ${IMAGE_NAME} -p 3000:3000 ${FULL_IMAGE_NAME}
                    """
                }
            }
        }
    }

}


