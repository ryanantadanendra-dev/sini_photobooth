<?php

namespace App\Mail;

use Illuminate\Mail\Mailable;

class TestEmail extends Mailable
{
    public function __construct(
        public string $name,
        public string $email,
        public string $event,
        public string $type,
    ) {}

    public function build(): self
    {
        return $this
            ->from(config('mail.from.address'), config('mail.from.name')) 
            ->replyTo($this->email, $this->name)
            ->subject("New Message from {$this->name}")
            ->html("
                <h2>New Photobooth MEssage</h2>
                <p><strong>Name:</strong> {$this->name}</p>
                <p><strong>Email:</strong> {$this->email}</p>
                <p><strong>Event:</strong> {$this->event}</p>
                <p><strong>Photobooth Type:</strong> {$this->type}</p>
            ");
    }
}