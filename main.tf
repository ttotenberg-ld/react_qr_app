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
  required_version = "~> 1.1.7"
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
resource "launchdarkly_feature_flag" "react_background_color" {
  project_key = var.project_key
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

  defaults {
    on_variation  = 1
    off_variation = 0
  }

  client_side_availability {
    using_environment_id = true
  }
}

resource "launchdarkly_feature_flag" "react_qr_code" {
  project_key = var.project_key
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

  defaults {
    on_variation  = 0
    off_variation = 1
  }

  client_side_availability {
    using_environment_id = true
  }
}

resource "launchdarkly_feature_flag" "parent_branding" {
  project_key = var.project_key
  key         = "reactParentBrand"
  name        = "React Parent Brand"

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
}

resource "launchdarkly_feature_flag" "child_header" {
  project_key = var.project_key
  key         = "reactChildHeaderLogo"
  name        = "React Child Header Logo"

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
}

resource "launchdarkly_feature_flag" "child_spinny" {
  project_key = var.project_key
  key         = "reactChildSpinnyLogo"
  name        = "React Child Spinny Logo"

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
}

resource "launchdarkly_feature_flag" "child_toggle" {
  project_key = var.project_key
  key         = "reactChildToggle"
  name        = "React Child Toggle"

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
}


resource "launchdarkly_feature_flag" "customer_logo" {
  project_key = var.project_key
  key         = "reactCustomerLogo"
  name        = "Customer Logo"

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
}


resource "launchdarkly_feature_flag" "show_customer_logo" {
  project_key = var.project_key
  key         = "reactShowCustomerLogo"
  name        = "Show Customer Logo"

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
}

resource "launchdarkly_feature_flag" "show_heart" {
  project_key = var.project_key
  key         = "reactShowHeart"
  name        = "Show Heart"

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
}
