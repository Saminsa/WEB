package models

import (
	"time"

	"gorm.io/gorm"
)

type Booking struct {
	ID        uint      `gorm:"primaryKey"`
	Name      string    `gorm:"size:100;not null"`
	Phone     string    `gorm:"size:20;not null"`
	Datetime  time.Time `gorm:"not null"`
	Status    string    `gorm:"size:50;not null"`
	CreatedAt time.Time
	UpdatedAt time.Time
	DeletedAt gorm.DeletedAt `gorm:"index"`
}
