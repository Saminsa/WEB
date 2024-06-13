package models

import (
	"time"

	"gorm.io/gorm"
)

type MenuItem struct {
	ID          uint   `gorm:"primaryKey"`
	Category    string `gorm:"size:100;not null"`
	Name        string `gorm:"size:100;not null"`
	Price       int    `gorm:"not null"`
	Description *string
	ImageURL    *string
	CreatedAt   time.Time
	UpdatedAt   time.Time
	DeletedAt   gorm.DeletedAt `gorm:"index"`
}
