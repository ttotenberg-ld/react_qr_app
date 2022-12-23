// Terraform file for setting up flags for the React QR App demo.
// You DON'T need to edit this file unless you're changing or creating
// default flag configurations. 
//
// If you just want to run this file to create the flags, then:
// 1. Edit the .tfvars file to add your project key and an API access token.
// 2. Ensure that you have Terraform installed.
// 3. Run: terraform plan -var-file=".tfvars"
// 4. Assuming you got no errors from step 3, run: terraform apply -var-file=".tfvars"
// 5. Go check out your new flags!

terraform {
  required_providers {
    launchdarkly = {
      source = "launchdarkly/launchdarkly"
      version = "~> 2.5"
    }
  }
  required_version = "> 1.1.6"
}

variable "access_token" {
  type = string
}

variable "project_key" {
  type = string
}

provider "launchdarkly" {
  access_token =  var.access_token
}
resource "launchdarkly_feature_flag" "config_background_color" {
  project_key = var.project_key
  key         = "config-background-color"
  name        = "Config: Background Color"

  variation_type = "string"
  variations {
    value       = "gray"
    name        = "Gray"
  }
  variations {
    value       = "blue"
    name        = "Blue"
  }
  variations {
    value       = "purple"
    name        = "Purple"
  }
  variations {
    value       = "red"
    name        = "Red"
  }

  defaults {
    on_variation  = 2
    off_variation = 0
  }

  client_side_availability {
    using_environment_id = true
  }

  tags = [
    "front-end",
    "QR"
  ]
}

resource "launchdarkly_feature_flag" "show_qr_code" {
  project_key = var.project_key
  key         = "show-qr-code"
  name        = "Show: QR Code"

  variation_type = "boolean"
  variations {
    value       = true
    name        = "True"
  }
  variations {
    value       = false
    name        = "False"
  }

  defaults {
    on_variation  = 0
    off_variation = 1
  }

  client_side_availability {
    using_environment_id = true
  }

  tags = [
    "front-end",
    "QR"
  ]
}

resource "launchdarkly_feature_flag" "release_new_ui" {
  project_key = var.project_key
  key         = "release-new-ui"
  name        = "Release: New UI"

  variation_type = "boolean"
  variations {
    value       = true
    name        = "New"
  }
  variations {
    value       = false
    name        = "Old"
  }

  defaults {
    on_variation  = 0
    off_variation = 1
  }

  client_side_availability {
    using_environment_id = true
  }

  tags = [
    "release"
  ]
}

resource "launchdarkly_feature_flag" "release_header_logo" {
  project_key = var.project_key
  key         = "release-header-logo"
  name        = "Release: Header Logo"

  variation_type = "boolean"
  variations {
    value       = true
    name        = "New"
  }
  variations {
    value       = false
    name        = "Old"
  }

  defaults {
    on_variation  = 0
    off_variation = 1
  }

  client_side_availability {
    using_environment_id = true
  }

  tags = [
    "front-end",
    "QR"
  ]
}

resource "launchdarkly_feature_flag" "release_astronaut" {
  project_key = var.project_key
  key         = "release-astronaut"
  name        = "Release: Astronaut"

  variation_type = "boolean"
  variations {
    value       = true
    name        = "New"
  }
  variations {
    value       = false
    name        = "Old"
  }

  defaults {
    on_variation  = 0
    off_variation = 1
  }

  client_side_availability {
    using_environment_id = true
  }

  tags = [
    "front-end",
    "QR"
  ]
}


resource "launchdarkly_feature_flag" "config_customer_logo" {
  project_key = var.project_key
  key         = "config-customer-logo"
  name        = "Config: Customer Logo"

  variation_type = "string"
  variations {
    value       = "https://www.link_to_your_logo.png"
    name        = "Our Logo"
  }
  variations {
    value       = "https://www.link_to_another_image.png"
    name        = "Some Other Image"
  }

  defaults {
    on_variation  = 1
    off_variation = 0
  }

  client_side_availability {
    using_environment_id = true
  }

  tags = [
    "front-end",
    "QR"
  ]
}


resource "launchdarkly_feature_flag" "show_customer_logo" {
  project_key = var.project_key
  key         = "show-customer-logo"
  name        = "Show: Customer Logo"

  variation_type = "boolean"
  variations {
    value       = true
    name        = "True"
  }
  variations {
    value       = false
    name        = "False"
  }

  defaults {
    on_variation  = 0
    off_variation = 1
  }

  client_side_availability {
    using_environment_id = true
  }

  tags = [
    "front-end",
    "QR"
  ]
}

resource "launchdarkly_feature_flag" "release_heart" {
  project_key = var.project_key
  key         = "release-heart"
  name        = "Release: Heart"

  variation_type = "boolean"
  variations {
    value       = true
    name        = "True"
  }
  variations {
    value       = false
    name        = "False"
  }

  defaults {
    on_variation  = 0
    off_variation = 1
  }

  client_side_availability {
    using_environment_id = true
  }

  tags = [
    "front-end",
    "QR"
  ]
}

resource "launchdarkly_feature_flag" "show_chatbot" {
  project_key = var.project_key
  key         = "show-chatbot"
  name        = "Show: Chatbot"

  variation_type = "boolean"
  variations {
    value       = true
    name        = "True"
  }
  variations {
    value       = false
    name        = "False"
  }

  defaults {
    on_variation  = 0
    off_variation = 1
  }

  client_side_availability {
    using_environment_id = true
  }

  tags = [
    "front-end",
    "QR"
  ]
}

resource "launchdarkly_feature_flag" "config_chatbot_personality" {
  project_key = var.project_key
  key         = "config-chatbot-personality"
  name        = "Config: Chatbot Personality"

  variation_type = "string"
  variations {
    value       = "nice"
    name        = "Answerbot"
  }
  variations {
    value       = "mean"
    name        = "Stack Overflow"
  }
  variations {
    value       = "pirate"
    name        = "Pirate"
  }
  variations {
    value       = "placeholder"
    name        = "Placeholder"
  }

  defaults {
    on_variation  = 0
    off_variation = 3
  }

  client_side_availability {
    using_environment_id = true
  }

  tags = [
    "back-end",
    "QR"
  ]
}

resource "launchdarkly_feature_flag" "release_chatbot" {
  project_key = var.project_key
  key         = "release-chatbot"
  name        = "Release: Chatbot"

  variation_type = "boolean"
  variations {
    value       = true
    name        = "True"
  }
  variations {
    value       = false
    name        = "False"
  }

  defaults {
    on_variation  = 0
    off_variation = 1
  }

  client_side_availability {
    using_environment_id = true
  }

  tags = [
    "release",
    "QR"
  ]
}