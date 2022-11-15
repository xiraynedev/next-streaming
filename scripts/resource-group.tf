resource "azurerm_resource_group" "nextstreaming" {
  name     = var.app_name
  location = var.location
}
