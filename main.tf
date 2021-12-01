terraform {
  required_providers {
    launchdarkly = {
      source = "launchdarkly/launchdarkly"
      version = "~> 1.0"
    }
  }
  required_version = "~> 0.13.0"
}

provider "launchdarkly" {
  version     = "~> 1.0"
  access_token = "YOUR_API_TOKEN"
}

resource "launchdarkly_feature_flag" "react_background_color" {
  project_key = "YOUR_PROJECT_KEY"
  key         = "reactBackgroundColor"
  name        = "React Background Color"

  variation_type = "string"
  variations {
    value       = "gray"
    name        = "Gray"
  }
  variations {
    value       = "purple"
    name        = "Purple"
  }
  variations {
    value       = "blue"
    name        = "Blue"
  }
  variations {
    value       = "red"
    name        = "Red"
  }

  default_on_variation  = "purple"
  default_off_variation = "gray"
}

resource "launchdarkly_feature_flag" "react_qr_code" {
  project_key = "YOUR_PROJECT_KEY"
  key         = "reactQRCode"
  name        = "React QR Code"

  variation_type = "boolean"
  variations {
    value       = true
    name        = "True"
  }
  variations {
    value       = false
    name        = "False"
  }

  default_on_variation  = "true"
  default_off_variation = "false"
}